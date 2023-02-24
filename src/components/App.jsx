import { useState, useEffect } from 'react';
import shortid from 'shortid';

import { ContactList } from './ContactList/ContactList';

import { Filter } from './Filter/Filter';
import { ContactFormFormik } from './ContactFormFormik/ContactFormFormik';
import { Box } from './Box';

export const App = () => {
  const [contacts, getContacts] = useState([]);
  const [filter, getFilter] = useState('');

  const addContact = ({ name, number }) => {
    const oldContact = contacts.find(contact => contact.name === name);

    if (oldContact) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    getContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = contactId => {
    getContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const changeFilter = e => {
    getFilter(e.currentTarget.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    if (contacts.length >= 1) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    const contactsLocal = JSON.parse(localStorage.getItem('contacts'));

    if (contactsLocal) {
      getContacts(contactsLocal);
    }
  }, []);

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
          contacts={getFilterContacts()}
          onDeleteContact={deleteContact}
        />
      </Box>
    </Box>
  );
};
