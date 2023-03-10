import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  Btn,
  Container,
  Error,
  Input,
  Label,
} from './ContactFormFormik.styled';

import { useSelector, useDispatch } from 'react-redux';
import { add, getContactsState } from 'redux/contactSlice';
import shortid from 'shortid';

const schema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is a required'),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone is a required'),
});
const initialValues = { name: '', number: '' };

export const ContactFormFormik = () => {
  const contacts = useSelector(getContactsState);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

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
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Container autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <Error name="name" component="div" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <Error name="number" component="div" />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </Container>
    </Formik>
  );
};
