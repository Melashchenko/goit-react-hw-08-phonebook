import React from 'react';

export const ContactEl = ({
  contact: { id, name, number },
  onDeleteContact,
}) => (
  <li>
    <p>
      {name}: {number}
    </p>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);
