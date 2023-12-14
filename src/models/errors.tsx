export interface IErrorBoundaryProps {
  children: React.ReactNode;
  errorMessage?: string;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}
