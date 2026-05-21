import * as Sentry from '@sentry/react';
import { createRoot } from 'react-dom/client';
import App from './app';

import '@styles/index.scss';

import './i18n';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  sendDefaultPii: true,
  enabled: import.meta.env.PROD,
});

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(<App />);
