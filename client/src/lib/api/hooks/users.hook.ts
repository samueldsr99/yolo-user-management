import { useMutation, useQuery } from "react-query";

import { deleteUser, listUsers, readUser } from "../users";
import * as querykeys from "../querykeys";
import queryClient from "../../../config/react-query.config";

export const useListUsers = () =>
  useQuery(querykeys.listUsers(), () => listUsers());

export const useReadUser = (id: number) =>
  useQuery(querykeys.readGame(id), () => readUser(id));

export const useDeleteUserMutation = () =>
  useMutation({
    mutationFn: ({ id }: { id: number }) => deleteUser(id),
    onSuccess: async (_, { id }) => {
      await queryClient.invalidateQueries(querykeys.readUser(id));
      await queryClient.invalidateQueries(querykeys.listUsers());
    },
  });
