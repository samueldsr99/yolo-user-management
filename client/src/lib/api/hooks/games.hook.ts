import { useMutation, useQuery } from "react-query";

import queryClient from "../../../config/react-query.config";
import { deleteGame, listGames, readGame } from "../games";
import * as querykeys from "../querykeys";

export const useListGames = () =>
  useQuery(querykeys.listGames(), () => listGames());

export const useReadGame = (id: number) =>
  useQuery(querykeys.readGame(id), () => readGame(id));

export const useDeleteGameMutation = () =>
  useMutation({
    mutationFn: ({ id }: { id: number }) => deleteGame(id),
    onSuccess: async (_, { id }) => {
      await queryClient.invalidateQueries(querykeys.listGames());
      await queryClient.invalidateQueries(querykeys.readGame(id));
    },
  });
