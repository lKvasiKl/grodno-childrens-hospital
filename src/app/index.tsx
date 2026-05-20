import { AppFooter, AppHeader, ErrorBoundary, HeroBanner, NavBar } from '@components';
import { Grid } from 'antd';

const App = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <ErrorBoundary>
      <AppHeader isMobile={isMobile} />
      <HeroBanner />
      {!isMobile && <NavBar />}
      <AppFooter isMobile={isMobile} />
    </ErrorBoundary>
  );
};

export default App;
