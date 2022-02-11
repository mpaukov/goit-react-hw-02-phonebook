import { ContactItem } from './ContactItem';

const ContactList = props => {
  return (
    <ul>
      {props.onFilter(props.filter).map(({ id, name, number }) => {
        return <ContactItem contact={{ name, number }} key={id} />;
      })}
    </ul>
  );
};

export default ContactList;
