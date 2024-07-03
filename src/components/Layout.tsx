import { Outlet } from 'react-router-dom';

import Header from './Header';
import ThemeFab from './ThemeFab';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ThemeFab />
    </>
  );
};

export default Layout;
