import { createRoot } from 'react-dom/client';
import App from './app';

import '@styles/index.scss';

import './i18n';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(<App />);
