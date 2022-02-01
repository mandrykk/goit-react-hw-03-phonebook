import PropTypes from 'prop-types';
import styles from './Filter.module.css';
    
export default function Filter({ filter = '', onFilter }) {
  return (
    <label htmlFor="name" className={styles.label}>
      <span className={styles.span}>Find contacts by name</span>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onInput={(e) => {
          onFilter(e.target.value)
        }}
      />
    </label>
  )
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
}