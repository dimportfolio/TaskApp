// src/core/components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        console.error('Error caught in ErrorBoundary:', error);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong. Please refresh.</h2>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
