import clsx from "classnames/bind";

export type SelectProps = JSX.IntrinsicElements["select"] & {};

const classes = clsx.bind({
  root: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",
});

const Select: React.FC<SelectProps> = ({ className, children, ...props }) => {
  return (
    <select className={classes("root", className)} {...props}>
      {children}
    </select>
  );
};

export default Select;
