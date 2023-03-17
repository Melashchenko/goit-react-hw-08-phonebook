import { Box } from 'components/Box';
import { ContactFormFormik } from 'components/ContactFormFormik/ContactFormFormik';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <Box as="main" display="flex" flexDirection="column" width={280}>
      <title>Your contacts </title>

      <ContactFormFormik />
      <Filter />
      <ContactList />
    </Box>
  );
}
