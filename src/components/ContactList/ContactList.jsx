import { useSelector, useDispatch } from 'react-redux';
import { remove, getContactsState } from 'redux/contactSlice';
import { getFilterState } from 'redux/filterSlice';

import { ContactEl } from 'components/ContactEl/ContactEl';

export const ContactList = () => {
  const contacts = useSelector(getContactsState);
  const filter = useSelector(getFilterState);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContacts();

  return (
    <ul>
      {filterContacts.map(contact => (
        <ContactEl
          contact={contact}
          key={contact.id}
          onDeleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
