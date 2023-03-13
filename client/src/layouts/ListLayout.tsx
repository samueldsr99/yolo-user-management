import BaseLayout from "./BaseLayout";

export type ListLayoutProps = React.PropsWithChildren<{
  title?: string;
  endSection?: JSX.Element;
}>;

const ListLayout: React.FC<ListLayoutProps> = ({
  title,
  children,
  endSection,
}) => {
  return (
    <BaseLayout>
      <div className="px-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">{title}</h1>
          <>{endSection}</>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </BaseLayout>
  );
};

export default ListLayout;
