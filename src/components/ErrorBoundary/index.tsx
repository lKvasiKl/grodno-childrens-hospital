import React, { type ErrorInfo, type ReactNode } from 'react';
import i18n from 'src/i18n';

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
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <h2>{i18n.t('errorBoundary')}</h2>

          <p>{error?.message}</p>

          <button onClick={this.handleReset}>{i18n.t('buttons.errorBoundary')}</button>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
