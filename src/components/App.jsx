// import { useState } from 'react';
import shortid from 'shortid';
import { Box } from './Box';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactFormFormik } from './ContactFormFormik/ContactFormFormik';
// import { useLocalStorage } from 'hooks/useLocalStorage';

import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  getContactsState,
  getFilter,
  getFilterState,
  remove,
} from 'redux/contactSlice';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(getContactsState);
  const filter = useSelector(getFilterState);
  const dispatch = useDispatch();

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

    dispatch(add({ name, number, ...newContact }));

    // setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = contactId => {
    // setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
    dispatch(remove(contactId));
  };

  const changeFilter = e => {
    // setFilter(e.currentTarget.value);
    dispatch(getFilter(e.currentTarget.value));
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

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

// useEffect(() => {
//   if (contacts.length >= 1) {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }
// }, [contacts]);

// useEffect(() => {
//   const contactsLocal = JSON.parse(localStorage.getItem('contacts'));

//   if (contactsLocal) {
//     getContacts(contactsLocal);
//   }
// }, []);
