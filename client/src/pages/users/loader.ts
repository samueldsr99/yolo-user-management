import queryClient from "../../config/react-query.config";
import * as querykeys from "../../lib/api/querykeys";
import { listUsers } from "../../lib/api/users";

export default async function usersLoader() {
  await queryClient.prefetchQuery(querykeys.listUsers(), () => listUsers());
  return null;
}
