import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button, Title } from '../Style.styled';

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
        <Title>Phonebook</Title>
        <Form onSubmit={this.handleSubmitForm}>
          <Label>Name</Label>
          <Input
            onChange={this.handleChangeForm}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label>Number</Label>
          <Input
            onChange={this.handleChangeForm}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

AddContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default AddContactForm;
