import type { QueryClient } from "react-query";
import type { LoaderFunction } from "react-router-dom";

import * as querykeys from "../../lib/api/querykeys";
import { listUsers } from "../../lib/api/users";

export default function usersLoader(queryClient: QueryClient): LoaderFunction {
  return async () => {
    await queryClient.prefetchQuery(querykeys.listUsers({}), () => listUsers());
    return null;
  };
}
