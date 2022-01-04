import type { ReactNode, VFC } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error }: FallbackProps) => (
  <div>
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);

/**
 * @package
 */
export const LayoutErrorBoundary: VFC<{ children: ReactNode }> = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);
