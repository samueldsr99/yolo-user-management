export type ErrorMessageProps = React.PropsWithChildren<{}>;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <span className="text-red-500">{children}</span>;
};

export default ErrorMessage;
