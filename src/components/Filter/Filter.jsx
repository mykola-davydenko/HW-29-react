import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/actions'
import css from './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={event => dispatch(setFilter(event.target.value))}
    />
  )
}
