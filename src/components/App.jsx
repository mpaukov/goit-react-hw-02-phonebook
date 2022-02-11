import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filteredContacts(value) {
    return this.state.contacts
      .filter(contact => {
        const filterNormalize = value.toLowerCase();
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  formSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
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
        <h1>Phone Book</h1>
        <ContactForm onSubmit={this.formSubmit} />
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
