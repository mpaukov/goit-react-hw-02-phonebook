import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filteredContacts(value) {
    return this.state.contacts.filter(contact => {
      const filterNormalize = value.toLowerCase();
      return contact.name.toLowerCase().includes(filterNormalize);
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        name: name.value,
        number: number.value,
      };
      const listOfContacts = [...prevState.contacts];
      listOfContacts.push(newContact);
      return { contacts: listOfContacts, name: '', number: '' };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <form action="submit" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <label>
            Find contact
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.handleFilterChange}
            />
          </label>
          <ul>
            {this.filteredContacts(this.state.filter).map(contact => {
              return (
                <li key={contact.id}>
                  <p>{contact.name}</p>
                  <p>{contact.number}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export { App };
