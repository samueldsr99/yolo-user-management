import httpService from "../../config/axios.config";
import { User } from "../../interfaces/user";

export const listUsers = () =>
  httpService.get("/users").then((e) => e.data as User[]);

export const readUser = (id: number) =>
  httpService.get(`/users/${id}`).then((e) => e.data as User);

export const deleteUser = (id: number) =>
  httpService.delete(`/users/${id}`).then((e) => e.data as User);
