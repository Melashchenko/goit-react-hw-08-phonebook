import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import { object, string } from 'yup';
import {
  Btn,
  Container,
  Error,
  Input,
  Label,
} from './ContactFormFormik.styled';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const schema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is a required'),
  phone: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone is a required'),
});
const initialValues = { name: '', phone: '' };

export const ContactFormFormik = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const oldContact = contacts.find(contact => contact.name === name);

    if (oldContact) {
      return alert(`${name} is already in contacts.`);
    }

    const newContact = {
      name: name,
      phone: phone,
    };
    dispatch(addContact(newContact));
    resetForm();
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
        <Label htmlFor="phone">
          Phone
          <Input type="tel" name="phone" />
          <Error name="phone" component="div" />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </Container>
    </Formik>
  );
};
