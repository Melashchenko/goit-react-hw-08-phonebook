import PropTypes from 'prop-types';

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

ContactEl.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
