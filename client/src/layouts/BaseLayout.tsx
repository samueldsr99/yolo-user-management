import Navbar from "../components/navbar";

export type BaseLayoutProps = React.PropsWithChildren<{}>;

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
