import { ContactEl } from 'components/ContactEl/ContactEl';
import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactEl
        contact={contact}
        key={contact.id}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);
