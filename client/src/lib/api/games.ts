import httpService from "../../config/axios.config";
import type { CreateGame, Game, ListGames } from "../../interfaces/game";

export const createGame = (data: CreateGame) =>
  httpService.post("/games", data).then((e) => e.data as Game);

export const listGames = (params: ListGames = {}) =>
  httpService.get("/games", { params }).then((e) => e.data as Game[]);

export const readGame = (id: number) =>
  httpService.get(`/games/${id}`).then((e) => e.data as Game);

export const deleteGame = (id: number) =>
  httpService.delete(`/games/${id}`).then((e) => e.data as Game);
