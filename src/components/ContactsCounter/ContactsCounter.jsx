import { useSelector } from 'react-redux'
import css from './ContactsCounter.module.css'

export const ContactsCounter = () => {
  const contacts = useSelector(state => state.contacts)

  return <p className={css.counter}>Number of contacts: {contacts.length}</p>
}
