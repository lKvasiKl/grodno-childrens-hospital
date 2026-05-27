import * as Sentry from '@sentry/react';
import { Button, Result } from 'antd';
import React, { type ErrorInfo, type ReactNode } from 'react';
import i18n from 'src/i18n';

import styles from './style.module.scss';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Sentry.captureException(error, {
      extra: {
        componentStack: errorInfo.componentStack,
      },
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={styles.errorBoundary}>
          <Result
            status="error"
            title={i18n.t('error.title')}
            subTitle={i18n.t('error.subTitle')}
            extra={[
              <Button type="primary" onClick={this.handleReset} key="reset">
                {i18n.t('buttons.tryAgain')}
              </Button>,
              <Button onClick={this.handleReload} key="reload">
                {i18n.t('buttons.reloadPage')}
              </Button>,
            ]}
          >
            {import.meta.env.DEV && (
              <pre className={styles.errorBoundary__error}>{error?.message}</pre>
            )}
          </Result>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
