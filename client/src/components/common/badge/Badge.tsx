import clsx from "classnames/bind";

export type BadgeVariant =
  | "disabled"
  | "warning"
  | "error"
  | "success"
  | "info";

export type BadgeProps = React.PropsWithChildren<{ variant?: BadgeVariant }>;

const classes = clsx.bind({
  root: "inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium",
  disabled: "bg-gray-100 text-gray-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
  success: "bg-green-100 text-green-800",
  info: "bg-blue-100 text-blue-800",
});

const Badge: React.FC<BadgeProps> = ({ children, variant = "success" }) => {
  return <span className={classes("root", variant)}>{children}</span>;
};

export default Badge;
