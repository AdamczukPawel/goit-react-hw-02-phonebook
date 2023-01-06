import { Component } from "react";
import { Contacts } from "./Contacts/Contacts";
// import {Form} from './Form/Form'

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.contacts.push(`${this.state.name}: ${this.state.number}`);
    this.setState({
      name: '',
      number: ''
    });
    console.log(this.state.contacts);
  };

  handleInputChange = (event) => {
    const { name, number, value } = event.target;
    this.setState(
      {
        [name]: value,
        [number]: value
      }
    );
  };



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
        <ul>
          <Contacts constactsList={this.state.contacts} />
        </ul>
      </>
  )}
}


