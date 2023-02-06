import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form } from './AddContactForm.styled';

const INITIAL_STATE = { name: '', number: '' };

class AddContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  handleChangeForm = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state, id: nanoid() });
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.handleSubmitForm}>
          <label>
            Name
            <input
              onChange={this.handleChangeForm}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleChangeForm}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </>
    );
  }
}

AddContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default AddContactForm;
