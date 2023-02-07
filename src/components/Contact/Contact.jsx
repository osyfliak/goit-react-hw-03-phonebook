import { Component } from 'react';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import ContactFiltr from './ContactFiltr/ContactFiltr';
import { Title, Div } from './Style.styled';

const LOCAL_CONTACT_KEY = 'localContactKey';

class Contact extends Component {
  state = {
    contactList: [],
    filter: '',
  };

  componentDidMount() {
    const savedContactList = JSON.parse(
      localStorage.getItem(LOCAL_CONTACT_KEY)
    );
    if (savedContactList) {
      this.setState({ contactList: savedContactList });
    }
  }

  componentDidUpdate(_, prevState, snapshot) {
    if (prevState.contactList.length !== this.state.contactList.length) {
      localStorage.setItem(
        LOCAL_CONTACT_KEY,
        JSON.stringify(this.state.contactList)
      );
    }
  }

  handleChangeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };
  handleFilterFilms = e => {
    const { contactList, filter } = this.state;

    return contactList.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  hanleDeleteContact = id => {
    this.setState(prevState => ({
      contactList: prevState.contactList.filter(item => item.id !== id),
    }));
  };
  hanleAddContact = newContact => {
    if (
      this.state.contactList.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      )
    ) {
      return alert('ERRROR');
    }
    this.setState(prevState => ({
      contactList: [...prevState.contactList, newContact],
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Div>
        <AddContactForm onAddContact={this.hanleAddContact} />
        <Title>Contacts</Title>
        <ContactFiltr onChange={this.handleChangeFilter} name={filter} />
        <ContactList
          contactList={this.handleFilterFilms()}
          onDeleteContact={this.hanleDeleteContact}
        />
      </Div>
    );
  }
}

export default Contact;
