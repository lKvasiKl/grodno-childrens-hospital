import { AppFooter, AppHeader, HeroBanner, NavBar } from '@components';
import { Outlet } from 'react-router-dom';

const AppLayout = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <AppHeader isMobile={isMobile} />
      <HeroBanner />
      {!isMobile && <NavBar />}
      <Outlet />
      <AppFooter isMobile={isMobile} />
    </>
  );
};

export default AppLayout;
