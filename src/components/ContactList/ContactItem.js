const ContactItem = props => {
  const { id, name, number } = props.contact;
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" id={id} onClick={props.onDelete}>
        Delete
      </button>
    </li>
  );
};

export { ContactItem };
