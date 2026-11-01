import { useSelector } from 'react-redux'
import { ContactItem } from '../ContactItem/ContactItem'
import css from './ContactList.module.css'

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filter)

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <ul className={css.list}>
      {visibleContacts.map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  )
}
