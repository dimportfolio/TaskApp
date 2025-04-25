import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TaskProvider } from './core/contexts/TaskContext';
import { store } from './core/store/store';
import { Suspense, lazy } from 'react';
import ErrorBoundary from './core/components/ErrorBoundary';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Provider store={store}>
      <TaskProvider>
        <BrowserRouter>
          <Suspense fallback={<p>Loading...</p>}>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </BrowserRouter>
      </TaskProvider>
    </Provider>
  );
}

export default App;
