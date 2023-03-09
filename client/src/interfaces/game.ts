import { IDBResult } from ".";
import { GameCategory } from "./game-category";

export interface Game extends IDBResult {
  imageUrl?: string;
  name: string;
  description?: string;
  categoryId: number;
  category?: GameCategory;
}