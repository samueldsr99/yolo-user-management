import clsx from "classnames/bind";

export type SelectProps = JSX.IntrinsicElements["select"] & {
  isError?: boolean;
};

const classes = clsx.bind({
  root: "block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6",
  normal: "ring-gray-300",
  error: "ring-red-500",
});

const Select: React.FC<SelectProps> = ({
  className,
  isError,
  children,
  ...props
}) => {
  return (
    <select
      className={classes("root", isError ? "error" : "normal", className)}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
