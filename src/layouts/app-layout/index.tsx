import { AppFooter, AppHeader, HeroBanner, NavBar } from '@components';
import { Outlet } from 'react-router-dom';

import styles from './style.module.scss';

const AppLayout = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className={styles.layout}>
      <AppHeader isMobile={isMobile} />
      <HeroBanner />
      {!isMobile && <NavBar />}

      <main className={styles.layout__main}>
        <Outlet />
      </main>

      <AppFooter isMobile={isMobile} />
    </div>
  );
};

export default AppLayout;
