import type { QueryClient } from "react-query";
import type { LoaderFunction } from "react-router-dom";

import { readGame } from "../../../lib/api/games";
import * as querykeys from "../../../lib/api/querykeys";

export default function (queryClient: QueryClient): LoaderFunction {
  return async ({ params }) => {
    if (params.id) {
      const id = Number(params.id);
      await queryClient.prefetchQuery(querykeys.readGame(id), () =>
        readGame(id)
      );
    }
    return null;
  };
}
