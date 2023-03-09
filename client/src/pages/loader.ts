import queryClient from "../config/react-query.config";
import { listGames } from "../lib/api/games";
import * as querykeys from "../lib/api/querykeys";

export default async function loader() {
  await queryClient.prefetchQuery(querykeys.listGames(), () => listGames());
  return null;
}
