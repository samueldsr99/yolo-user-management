import { useParams } from "react-router-dom";

import Badge from "../../../components/common/badge";
import LoadingState from "../../../components/loading-state/LoadingState";
import DetailsLayout from "../../../layouts/DetailsLayout";
import { useReadGame } from "../../../lib/api/hooks/games.hook";
import { fromIdToBadgeVariant } from "../../../lib/utils";

const GameDetailsPage: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const { data: game, isLoading } = useReadGame(Number(id));

  return (
    <DetailsLayout
      title={game?.name ?? ""}
      returnUrl="/games"
      returnText="Back to games"
    >
      <LoadingState open={isLoading} />
      {game ? (
        <div className="flex flex-col gap-6">
          <img
            className="h-96 object-cover"
            src={game.imageUrl}
            width={900}
            height={600}
          />
          <p className="text-gray-800 font-medium">
            {game?.description ?? "No Description"}
          </p>
          <span>
            Category:{" "}
            <Badge variant={fromIdToBadgeVariant(game.category?.id ?? 1)}>
              {game.category?.name}
            </Badge>
          </span>
        </div>
      ) : null}
    </DetailsLayout>
  );
};

export default GameDetailsPage;
