import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  }

  handleInput = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddContact(this.state.name, this.state.number)
    this.formReset()
  }

  formReset = () => {
    this.setState({ name: '', number: '' })
  }

  render() {
    const { name, number } = this.state
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name" className={styles.label}>
            <span className={styles.span}>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInput}
            />
          </label>
          <label htmlFor="name" className={styles.label}>
            <span className={styles.span}>Phone</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\styles]?\(?\d{1,3}?\)?[-.\styles]?\d{1,4}[-.\styles]?\d{1,4}[-.\styles]?\d{1,9}"
              value={number}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInput}
            />
          </label>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </>
    )
  }
}

Phonebook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
}

export default Phonebook