import React from 'react';
export const Contacts = ({ contacts }) => (
  <div>
    <h2>Contacts</h2>
    <h3>Find contacts by name</h3>
    <input type="text" />
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
        </li>
      ))}
    </ul>
  </div>
);
