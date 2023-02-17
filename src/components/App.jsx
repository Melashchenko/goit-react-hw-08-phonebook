import React, { Component } from 'react';
import shortid from 'shortid';
import { Contacts } from './Contacts/Contacts';
import { ContactEditor } from './ContactEditor/ContactEditor';

export class App extends Component {
  static defaultProps = {
    initialContacts: [
      { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: shortid.generate(), name: 'Hermine Kline', number: '443-89-12' },
      { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
      { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  state = {
    contacts: this.props.initialContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>

        <ContactEditor onContact={this.addContact} />

        <Contacts contacts={contacts} />
      </>
    );
  }
}
