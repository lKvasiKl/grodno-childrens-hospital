import { ErrorBoundary } from '@components';
import { Grid } from 'antd';
import { Router } from './router';

const App = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <ErrorBoundary>
      <Router isMobile={isMobile} />
    </ErrorBoundary>
  );
};

export default App;
