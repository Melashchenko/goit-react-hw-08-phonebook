import PropTypes from 'prop-types';

import { Btn, ContactsEl } from 'components/ContactEl/ContactEl.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactEl = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <ContactsEl>
      <p>
        {name}: <br />
        {phone}
      </p>
      <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
    </ContactsEl>
  );
};

ContactEl.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
