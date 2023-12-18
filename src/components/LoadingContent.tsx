import { ReactNode } from "react";
import ErrorContent from "common/ErrorContent";
import EmptyContentCard from "./EmptyContentCard";
import { PiSpinner } from "react-icons/pi";

interface LoadingContentType<T> {
  size: number;
  error: boolean;
  loading: boolean;
  children: JSX.Element | (() => JSX.Element);
  onReload: () => void;
  onMount: () => void;
  data: T[];
  loadingContent: JSX.Element | ((x: JSX.Element) => ReactNode);
  errorContent: JSX.Element | ((x: JSX.Element) => ReactNode);
  emptyContent: JSX.Element | ((x: JSX.Element) => ReactNode);
  className: string;
}

/**
 * @typedef {{
 * size: string | number,
 * onMount: Function,
 * onReload: Function,
 * error: boolean,
 * loading: boolean,
 * errorContent: React.ReactNode,
 * emptyContent:  React.ReactNode,
 * loadingContent: React.ReactNode,
 * }} LoadingContentProps
 */

/**
 *
 * @param {LoadingContentProps} props
 */
function LoadingContent<T>(props: Partial<LoadingContentType<T>>): JSX.Element {
  const {
    error,
    loading,
    data,
    children,
    onReload,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // onMount,
    loadingContent,
    errorContent,
    emptyContent,
    className,
    // ...rest
  } = props;

  const defaultLoadingContent = (
    <div className="flex justify-center items-center w-full h-full">
      <PiSpinner className="w-52" />
    </div>
  );
  const defaultEmptyContent = <EmptyContentCard />;
  const defaultErrorContent = <ErrorContent onReload={() => onReload?.()} />;

  if (error) {
    return (
      <div className={className}>
        {}
        {errorContent
          ? typeof errorContent === "function"
            ? errorContent(defaultErrorContent)
            : errorContent
          : defaultErrorContent}
      </div>
    );
  }

  if (loading) {
    return (
      <div className={className}>
        {}
        {loadingContent
          ? typeof loadingContent === "function"
            ? loadingContent(defaultLoadingContent)
            : loadingContent
          : defaultLoadingContent}
      </div>
    );
  }

  if (!loading && !error && data?.length === 0) {
    return (
      <div className={className}>
        {}
        {emptyContent
          ? typeof emptyContent === "function"
            ? emptyContent(defaultEmptyContent)
            : emptyContent
          : defaultEmptyContent}
      </div>
    );
  }

  return <>{children}</>;
}

LoadingContent.defaultProps = {
  size: 40,
  children: null,
};

export default LoadingContent;

export {};
