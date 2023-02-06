import { Input, Label } from '../Style.styled';
import PropTypes from 'prop-types';

const ContactFiltr = ({ onChange, name }) => {
  return (
    <>
      <Label>Find contact by name </Label>
      <Input
        onChange={onChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

ContactFiltr.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default ContactFiltr;
