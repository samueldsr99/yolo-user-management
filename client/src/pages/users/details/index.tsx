import { useParams } from "react-router-dom";

import DetailsLayout from "../../../layouts/DetailsLayout";
import { useReadUser } from "../../../lib/api/hooks/users.hook";

const DetailsField: React.FC<{ label?: string; value?: string }> = ({
  label,
  value,
}) => {
  return (
    <div>
      <span className="text-lg font-medium text-gray-800">{label}:</span>
      <span className="ml-1 text-lg font-semibold text-gray-900">{value}</span>
    </div>
  );
};

const UserDetailsPage: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const { data: user, isLoading } = useReadUser(Number(id));

  return user && !isLoading ? (
    <DetailsLayout
      title={user.name}
      returnText="Back to users"
      returnUrl="/users"
    >
      <div className="divide-y divide-gray-300">
        <div className="py-8 space-y-6">
          <DetailsField label="Email" value={user.email} />
          <DetailsField label="Name" value={user.name} />
        </div>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
          <DetailsField label="Line 1" value={user.address?.line1} />
          <DetailsField label="Line 2" value={user.address?.line2 ?? "N/A"} />
          <DetailsField label="City" value={user.address?.city} />
          <DetailsField label="Country" value={user.address?.country} />
        </div>
      </div>
    </DetailsLayout>
  ) : (
    <>Loading</>
  );
};

export default UserDetailsPage;
