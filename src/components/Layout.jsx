import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { AppBar } from './AppBar/AppBar';
import { Container } from './AppBar/AppBar.styled';
import Footer from './Footer/Footer';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </Container>
  );
};
