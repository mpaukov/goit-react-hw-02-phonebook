const ContactItem = props => {
  const { name, number } = props.contact;
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
};

export { ContactItem };
