const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map(item => (
        <li key={item.id}>
          {item.name}: {item.number}
          <button onClick={() => onDeleteContact(item.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
