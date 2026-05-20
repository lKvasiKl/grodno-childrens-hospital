import { AppFooter, AppHeader, HeroBanner, NavBar } from '@components';
import { Grid } from 'antd';

const App = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <>
      <AppHeader isMobile={isMobile} />
      <HeroBanner />
      {!isMobile && <NavBar />}
      <AppFooter isMobile={isMobile} />
    </>
  );
};

export default App;
