import { Box } from 'components/Box';
import { ContactFormFormik } from 'components/ContactFormFormik/ContactFormFormik';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <Box
      as="div"
      display="flex"
      flexDirection="column"
      width={280}
      marginBottom={16}
    >
      <title>Your contacts </title>

      <ContactFormFormik />
      <Filter />
      <ContactList />
    </Box>
  );
}
