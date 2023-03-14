import { Box } from './Box';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactFormFormik } from './ContactFormFormik/ContactFormFormik';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { UserMenu } from './UserMenu/UserMenu';

export const App = () => {
  return (
    <Box as="div" p={15}>
      <Box as="h1" p={10}>
        Phonebook
      </Box>
      <Box as="div" display="flex" flexDirection="column" width={280}>
        <ContactFormFormik />

        <Box as="h2" p={10}>
          Contacts
        </Box>

        <Filter />
        <ContactList />
        <RegisterForm />
        <LoginForm />
        <UserMenu />
      </Box>
    </Box>
  );
};
