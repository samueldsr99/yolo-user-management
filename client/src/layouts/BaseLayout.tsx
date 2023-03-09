import Navbar from "../components/navbar";

export type BaseLayoutProps = React.PropsWithChildren<{}>;

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-2 md:px-8 lg:px-12 py-12">{children}</main>
    </>
  );
};

export default BaseLayout;
