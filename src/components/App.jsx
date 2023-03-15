import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Box } from './Box';
import { Layout } from './Layout';

const HomePage = lazy(() => import('pages/Home/Home'));
const ContactsPages = lazy(() => import('pages/Contacts/Contacts'));
const RegisterPages = lazy(() => import('pages/Register/Register'));
const LoginFormPages = lazy(() => import('pages/Login/Login'));

export const App = () => {
  return (
    <Box as="div" p={15}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPages />} />
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/login" element={<LoginFormPages />} />
        </Route>
      </Routes>
    </Box>
  );
};
