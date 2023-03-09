import queryClient from "../config/react-query.config";
import * as querykeys from "../lib/api/querykeys";

export default async function loader() {
  await queryClient.prefetchQuery(querykeys.listGames());
  return null;
}
