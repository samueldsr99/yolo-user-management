import { useMutation, useQuery } from "react-query";

import { createUser, deleteUser, listUsers, readUser } from "../users";
import * as querykeys from "../querykeys";
import queryClient from "../../../config/react-query.config";
import { CreateUser } from "../../../interfaces/user";

export const useListUsers = () =>
  useQuery(querykeys.listUsers({}), () => listUsers());

export const useReadUser = (id: number) =>
  useQuery(querykeys.readGame(id), () => readUser(id));

export const useDeleteUserMutation = () =>
  useMutation({
    mutationFn: ({ id }: { id: number }) => deleteUser(id),
    onSuccess: async (_, { id }) => {
      await queryClient.invalidateQueries(querykeys.readUser(id));
      await queryClient.invalidateQueries(querykeys.listUsers({}));
    },
  });

export const useCreateUserMutation = () =>
  useMutation({
    mutationFn: (data: CreateUser) => createUser(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries(querykeys.listUsers({}));
    },
  });
