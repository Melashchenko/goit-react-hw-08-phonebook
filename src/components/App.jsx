import React, { Component } from 'react';
import shortid from 'shortid';

import { ContactList } from './ContactList/ContactList';

import { Filter } from './Filter/Filter';
import { ContactFormFormik } from './ContactFormFormik/ContactFormFormik';
import { Box } from './Box';

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

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getFilterContacts();
    const { addContact, changeFilter, deleteContact } = this;

    return (
      <Box as="div" p={15}>
        <Box as="h1" p={10}>
          Phonebook
        </Box>
        <Box as="div" display="flex" flexDirection="column" width={280}>
          <ContactFormFormik onAddContact={addContact} />

          <Box as="h2" p={10}>
            Contacts
          </Box>

          <Filter filter={filter} onFilter={changeFilter} />
          <ContactList
            contacts={filterContacts}
            onDeleteContact={deleteContact}
          />
        </Box>
      </Box>
    );
  }
}
