import { Component } from "react";
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts/Contacts";
// import {Form} from './Form/Form'

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
    filter: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const contactData = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid()
    }
    this.setState(prevState =>({
      contacts: [...prevState.contacts, contactData]
    }))
  };

  handleInputChange = (event) => {
    const { name, number,filter, value } = event.target;
    this.setState(
      {
        [name]: value,
        [number]: value,
        [filter]: value,
      }
    );
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const lowerCaseFilterValue = filter.toLowerCase();

    return contacts.filter(contact => (contact.name.toLowerCase().includes(lowerCaseFilterValue)))
  }

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <p>Name</p>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
            />
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleInputChange}
              required
            />
            <button type="submit">Add contact</button>
          </form>
          
        </div>
        <h2>Contacts</h2>
        <p>Find contact by name</p>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleInputChange}
        />
        <ul>
          <Contacts constactsList={this.filterContacts()} />
        </ul>
      </>
  )}
}


