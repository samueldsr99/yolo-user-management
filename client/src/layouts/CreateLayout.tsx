import BaseLayout from "./BaseLayout";

export type CreateLayoutProps = React.PropsWithChildren<{
  title?: string;
}>;

const CreateLayout: React.FC<CreateLayoutProps> = ({ children, title }) => {
  return (
    <BaseLayout>
      <div className="container max-w-2xl px-2 md:px-8 mx-auto divide-y divide-gray-300">
        <h1 className="font-bold text-4xl text-center pb-4">{title}</h1>
        <div className="pt-4">{children}</div>
      </div>
    </BaseLayout>
  );
};

export default CreateLayout;
