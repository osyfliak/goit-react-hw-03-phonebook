import { Button, List } from '../Style.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <List>
      {contactList.map(item => (
        <li key={item.id}>
          {item.name}: {item.number}
          <Button onClick={() => onDeleteContact(item.id)} type="button">
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
