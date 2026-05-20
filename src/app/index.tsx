import { AppHeader, HeroBanner, NavBar } from '@components';
import { Grid } from 'antd';

const App = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  return (
    <>
      <AppHeader isMobile={isMobile} />
      <HeroBanner />
      {!isMobile && <NavBar />}
    </>
  );
};

export default App;
