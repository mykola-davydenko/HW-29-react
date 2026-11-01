import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/actions'
import css from './ContactItem.module.css'

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch()

  return (
    <li className={css.item}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
}
