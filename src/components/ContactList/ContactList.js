import { ContactItem } from './ContactItem';

const ContactList = props => {
  return (
    <ul>
      {props.onFilter(props.filter).map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={props.onDelete}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
