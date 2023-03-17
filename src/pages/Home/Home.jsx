import { Box } from 'components/Box';
import { Link } from 'react-router-dom';
import PhonebookImg from '../../services/phoneBook.png';

export default function Home() {
  return (
    <Box
      as="div"
      display="flex"
      alignItems="center"
      flexDirection="column"
      marginBottom={16}
    >
      <h1>Phonebook</h1>
      <Link to="contacts">
        {' '}
        <img src={PhonebookImg} alt="PhonebookImg" width={280} height={280} />
      </Link>
    </Box>
  );
}
