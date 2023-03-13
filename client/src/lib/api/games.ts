import httpService from "../../config/axios.config";
import type { Game } from "../../interfaces/game";

export const listGames = () =>
  httpService.get("/games").then((e) => e.data as Game[]);

export const readGame = (id: number) =>
  httpService.get(`/games/${id}`).then((e) => e.data as Game);

export const deleteGame = (id: number) =>
  httpService.delete(`/games/${id}`).then((e) => e.data as Game);
