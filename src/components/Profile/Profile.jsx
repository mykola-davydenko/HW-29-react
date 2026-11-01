import PropTypes from 'prop-types'
import css from './Profile.module.css'

export const Profile = ({ name, age, email, status }) => {
  return (
    <div className={css.profile}>
      <p>Ім'я: {name}</p>
      <p>Вік: {age}</p>
      <p>Пошта: {email}</p>
      <p>Статус: {status}</p>
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}
