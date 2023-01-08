import { Component } from "react";
import { nanoid } from 'nanoid';
import swal from 'sweetalert';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from './Filter/Filter'
import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component {
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const { name, number } = form.elements;

    const contactData = {
      name: name.value,
      number: number.value,
      id: nanoid()
    }

    if (this.state.contacts.find(contact => contact.name === name.value)) {
      swal("Oops!", `${name.value} is already in contacts`, "error");
      return;
    }

    this.setState(prevState =>({
      contacts: [...prevState.contacts, contactData]
    }))
  };

  handleFilterChange = (event) => {
    this.setState({filter: event.currentTarget.value});
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const lowerCaseFilterValue = filter.toLowerCase();

    return contacts.filter(contact => (contact.name.toLowerCase().includes(lowerCaseFilterValue)))
  }

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }))
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={ this.handleSubmit } />
        <h2>Contacts</h2>
        <Filter handleInputChange={this.handleFilterChange} value={this.state.filter} />
        <ContactList constactsList={this.filterContacts()} deleteContact={this.deleteContact} />
      </div>
  )}
}


