import type { QueryClient } from "react-query";
import type { LoaderFunction } from "react-router-dom";

import { readUser } from "../../../lib/api/users";
import * as querykeys from "../../../lib/api/querykeys";

export default function (queryClient: QueryClient): LoaderFunction {
  return async ({ params }) => {
    if (params.id) {
      const id = Number(params.id);
      await queryClient.prefetchQuery(querykeys.readUser(id), () =>
        readUser(id)
      );
    }
    return null;
  };
}
