import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/actions'
import css from './ContactForm.module.css'

export const ContactForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts)

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = form.elements.name.value
    const number = form.elements.number.value

    const found = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    )

    if (found) {
      alert(`${name} is already in contacts`)
      return
    }

    dispatch(addContact(name, number))
    form.reset()
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        placeholder="Number"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  )
}
