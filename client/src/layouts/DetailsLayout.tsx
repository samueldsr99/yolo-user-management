import { Link } from "react-router-dom";

import Button from "../components/common/button";
import BaseLayout from "./BaseLayout";

export type DetailsLayoutProps = React.PropsWithChildren<{
  title?: string;
  returnUrl?: string;
  returnText?: string;
}>;

const DetailsLayout: React.FC<DetailsLayoutProps> = ({
  children,
  title,
  returnUrl,
  returnText,
}) => {
  return (
    <BaseLayout>
      <div className="container max-w-2xl mx-auto px-2 md:px-8">
        {returnUrl ? (
          <Link to={returnUrl}>
            <Button size="sm" variant="secondary">
              {returnText ?? "Back"}
            </Button>
          </Link>
        ) : null}
        <div className="mt-8 divide-y divide-gray-300">
          <h1 className="font-bold text-4xl pb-4">{title}</h1>
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default DetailsLayout;
