import { useQuery } from "react-query";
import { listGames, readGame } from "../games";

import * as querykeys from "../querykeys";

export const useListGames = () =>
  useQuery(querykeys.listGames(), () => listGames());

export const useReadGame = (id: number) =>
  useQuery(querykeys.readGame(id), () => readGame(id));
