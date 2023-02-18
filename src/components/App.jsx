import React, { Component } from 'react';
import shortid from 'shortid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  static defaultProps = {
    initialContacts: [
      {
        id: shortid.generate(),
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: shortid.generate(),
        name: 'Hermine Kline',
        number: '443-89-12',
      },
      {
        id: shortid.generate(),
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: shortid.generate(),
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
  };

  state = {
    contacts: this.props.initialContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const oldContact = this.state.contacts.find(
      contact => contact.name === name
    );

    if (oldContact) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getFilterContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
