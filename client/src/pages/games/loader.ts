import type { QueryClient } from "react-query";
import type { LoaderFunction } from "react-router-dom";

import { listGames } from "../../lib/api/games";
import * as querykeys from "../../lib/api/querykeys";

export default function (queryClient: QueryClient): LoaderFunction {
  return async () => {
    await queryClient.prefetchQuery(querykeys.listGames(), () => listGames());
    return null;
  };
}
