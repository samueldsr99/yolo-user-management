import * as React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/common/button";
import Table from "../../components/common/table/Table";
import { ConfirmationModal } from "../../components/modals";
import ListLayout from "../../layouts/ListLayout";
import {
  useDeleteUserMutation,
  useListUsers,
} from "../../lib/api/hooks/users.hook";
import { formatAddress, formatDateString } from "../../lib/utils";

const UsersPage: React.FC = () => {
  const { data: users } = useListUsers();
  const { mutateAsync: deleteUser, isLoading: isMutating } =
    useDeleteUserMutation();
  const [deleteModalState, setDeleteModalState] = React.useState<{
    open: boolean;
    id: number | null;
  }>({
    open: false,
    id: null,
  });

  const handleCloseDeleteModal = () =>
    setDeleteModalState({ open: false, id: null });

  const handleConfirmDeleteModal = async () => {
    if (deleteModalState.open && deleteModalState.id) {
      await deleteUser({ id: deleteModalState.id });
    }
    handleCloseDeleteModal();
  };

  const rows = React.useMemo(() => {
    return (
      users?.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address ? formatAddress(user.address) : "",
        createdAt: formatDateString(user.createdAt),
      })) ?? []
    );
  }, [users]);
  const columns = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Address", key: "address" },
    { label: "Date Created", key: "createdAt" },
  ];

  return (
    <ListLayout
      title="Users"
      endSection={
        <Link to="/users/new">
          <Button variant="secondary">Add user</Button>
        </Link>
      }
    >
      <Table
        rows={rows}
        columns={columns}
        onDelete={(id) => setDeleteModalState({ open: true, id })}
        detailsUrl={(id) => `/users/${id}`}
      />
      <ConfirmationModal
        open={deleteModalState?.open}
        onClose={handleCloseDeleteModal}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteModal}
        submitting={isMutating}
        title={
          <>
            Are you sure you want to delete user{" "}
            <strong>{deleteModalState?.id}</strong>?
          </>
        }
        content="This action cannot be undone."
      />
    </ListLayout>
  );
};

export default UsersPage;
