import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <>
      <span className={styles.span}>{name}</span>
      <span className={styles.span}>{number}</span>
      <button
        type="button"
        className={styles.button}
        data-id={id}
        onClick={() => {
          onDelete(id)
        }}
      >
        Delete
      </button>
    </>
  )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}