import { Btn, ContactsEl } from 'components/ContactEl/ContactEl.styled';
import React from 'react';

export const ContactEl = ({
  contact: { id, name, number },
  onDeleteContact,
}) => (
  <ContactsEl>
    <p>
      {name}: {number}
    </p>
    <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
  </ContactsEl>
);
