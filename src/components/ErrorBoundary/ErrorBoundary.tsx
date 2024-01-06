import React from 'react';
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

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className={styles.error_wrapper}>
          <h1>Something went wrong, please try later!</h1>
          {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
