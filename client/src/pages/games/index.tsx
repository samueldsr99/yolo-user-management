import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";

import Table from "../../components/common/table";
import ListLayout from "../../layouts/ListLayout";
import {
  useDeleteGameMutation,
  useListGames,
} from "../../lib/api/hooks/games.hook";
import Button from "../../components/common/button";
import { ConfirmationModal } from "../../components/modals";
import { formatDateString } from "../../lib/utils";
import ListGamesFilters from "../_components/ListGamesFilters";
import LoadingState from "../../components/loading-state";

const GamesPage: React.FC = () => {
  const [params] = useSearchParams();
  const categoryId = params.get("category");
  const startDate = params.get("startDate") ?? undefined;
  const endDate = params.get("endDate") ?? undefined;

  const {
    data: games,
    isLoading,
    isRefetching,
  } = useListGames({
    categoryId: categoryId ? Number(categoryId) : undefined,
    startDate,
    endDate,
  });
  const { mutateAsync: deleteGame, isLoading: isMutating } =
    useDeleteGameMutation();
  const [deleteModalState, setDeleteModalState] = React.useState<{
    open: boolean;
    id: number | null;
  }>({
    open: false,
    id: null,
  });

  const rows = React.useMemo(() => {
    return (
      games?.map((game) => ({
        id: game.id,
        name: game.name,
        category: game?.category?.name ?? "",
        createdAt: formatDateString(game.createdAt),
      })) ?? []
    );
  }, [games]);
  const columns = [
    { label: "Name", key: "name" },
    { label: "Category", key: "category" },
    { label: "Date Created", key: "createdAt" },
  ];

  const handleCloseDeleteModal = () =>
    setDeleteModalState({ open: false, id: null });

  const handleConfirmDeleteModal = async () => {
    if (deleteModalState.open && deleteModalState.id) {
      await deleteGame({ id: deleteModalState.id });
    }
    handleCloseDeleteModal();
  };

  return (
    <ListLayout
      title="Games"
      endSection={
        <Link to="/games/new">
          <Button variant="secondary">Add game</Button>
        </Link>
      }
    >
      <LoadingState open={isLoading || isRefetching} />
      <ListGamesFilters />
      <Table
        rows={rows}
        columns={columns}
        onDelete={(id) => setDeleteModalState({ open: true, id })}
        detailsUrl={(id) => `/games/${id}`}
      />
      <ConfirmationModal
        open={deleteModalState?.open}
        onClose={handleCloseDeleteModal}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteModal}
        submitting={isMutating}
        title={
          <>
            Are you sure you want to delete game{" "}
            <strong>{deleteModalState?.id}</strong>?
          </>
        }
        content="This action cannot be undone."
      />
    </ListLayout>
  );
};

export default GamesPage;
