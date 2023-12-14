import React, { ErrorInfo } from 'react';
import styles from './ErrorBoundary.module.scss';
import { IErrorBoundaryProps, IErrorBoundaryState } from '../../models/errors';

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    if (!error) {
      return { hasError: false };
    }
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  componentDidUpdate(prevProps: IErrorBoundaryProps): void {
    if (prevProps.children !== this.props.children) {
      this.setState({ hasError: false });
    }
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className={styles.error_wrapper}>
          <h1>Something went wrong, please reload the page</h1>
          {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
