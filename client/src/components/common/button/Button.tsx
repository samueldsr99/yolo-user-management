type ButtonProps = JSX.IntrinsicElements["button"] & {
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
