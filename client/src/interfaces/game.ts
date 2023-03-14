import { IDBResult } from ".";
import { GameCategory } from "./game-category";

export interface Game extends IDBResult {
  imageUrl?: string;
  name: string;
  description?: string;
  categoryId?: number;
  category?: GameCategory;
}

export interface ListGames {
  categoryId?: number;
  startDate?: string;
  endDate?: string;
}

export interface CreateGame {
  categoryId: number;
  name: string;
  imageUrl?: string;
  description?: string;
}
