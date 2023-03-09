import httpService from "../../config/axios.config";
import { Game } from "../../interfaces/game";

export const listGames = () =>
  httpService.get("/games").then((e) => e.data as Game[]);

export const readGame = (id: number) =>
  httpService.get(`/game/${id}`).then((e) => e.data as Game);
