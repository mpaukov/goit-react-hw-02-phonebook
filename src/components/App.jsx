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

  handleSubmit = e => {
    e.preventDefault();

    const input = e.target[0].value;

    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        name: input,
      };

      const newContacts = [...prevState.contacts];
      newContacts.push(newContact);
      return { contacts: newContacts };
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
            Имя
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Сохранить</button>
        </form>
        <div>
          <ul>
            {this.state.contacts.map(contact => {
              return (
                <li>
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
