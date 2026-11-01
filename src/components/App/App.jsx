import { Profile } from '../Profile/Profile'
import { ContactForm } from '../ContactForm/ContactForm'
import { Filter } from '../Filter/Filter'
import { ContactsCounter } from '../ContactsCounter/ContactsCounter'
import { ContactList } from '../ContactList/ContactList'
import css from './App.module.css'

export const App = () => {
  return (
    <div className={css.box}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsCounter />
      <Filter />
      <ContactList />
    </div>
  )
}
