import httpService from "../../config/axios.config";
import { CreateUser, User } from "../../interfaces/user";

export const createUser = (data: CreateUser) =>
  httpService.post("/users", data).then((e) => e.data as User);

export const listUsers = () =>
  httpService.get("/users").then((e) => e.data as User[]);

export const readUser = (id: number) =>
  httpService.get(`/users/${id}`).then((e) => e.data as User);

export const deleteUser = (id: number) =>
  httpService.delete(`/users/${id}`).then((e) => e.data as User);
