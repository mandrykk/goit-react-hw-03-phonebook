import PropTypes from 'prop-types';
import styles from './Contacts.module.css';
import ContactItem from '../ContactItem/ContactItem';

export default function Contacts({ listContacts = [], onDelete }) {
  return (
    <ul className={styles.list}>
      {listContacts.map((element) => (
        <li className={styles.item} key={element.id}>
          <ContactItem
            id={element.id}
            name={element.name}
            number={element.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  )
}

Contacts.propTypes = {
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
}