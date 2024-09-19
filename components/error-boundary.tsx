import React, { ReactNode } from 'react';

class ErrorBoundary extends React.Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true }; // Update state so the next render will show the fallback UI
  }

  componentDidCatch(error: Error) {
    console.error("Error caught in error boundary:", error); // Log error details
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Fallback UI
    }
    return this.props.children; // Render children if no error
  }
}

export default ErrorBoundary;
