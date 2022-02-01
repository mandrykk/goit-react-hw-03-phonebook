import PropTypes from 'prop-types';
import styles from './Container.module.css';

export default function Container({ title = '', children }) {
  return (
    <div>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  )
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

