import httpService from "../../config/axios.config";
import { GameCategory } from "../../interfaces/game-category";

export const listCategories = () =>
  httpService.get("/categories").then((e) => e.data as GameCategory[]);
