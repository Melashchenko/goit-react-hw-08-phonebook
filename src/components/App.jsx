import { useState } from 'react';
import shortid from 'shortid';
import { Box } from './Box';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactFormFormik } from './ContactFormFormik/ContactFormFormik';
import { useLocalStorage } from 'hooks/useLocalStorage';

import { useSelector, useDispatch } from 'react-redux';
import { getClickValue, update } from 'redux/clickSlice';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

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

    setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const dispatch = useDispatch();
  const numberOfClicks = useSelector(getClickValue);

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
        <h1>Clicks {numberOfClicks}</h1>
        <button type="button" onClick={() => dispatch(update(5))}>
          Click 5
        </button>
        <button type="button" onClick={() => dispatch(update(10))}>
          Click 10
        </button>
        <button type="button" onClick={() => dispatch(update(-20))}>
          Click -20
        </button>
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
