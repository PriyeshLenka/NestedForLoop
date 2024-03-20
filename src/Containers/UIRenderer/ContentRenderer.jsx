import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ContentRenderer = () => {
  const fallbackRender = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: 'red', whiteSpace: 'inherit' }}>
          {error.message}
        </pre>
        <button onClick={resetErrorBoundary}>Retry</button>
      </div>
    );
  };

  return (
    <div className="content-renderer-root mt-12" id="content-render">
      <ErrorBoundary FallbackComponent={fallbackRender}>
        <Suspense fallback={<center>Loading...</center>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ContentRenderer;
