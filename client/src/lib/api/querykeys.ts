export const listGames = (params: object = {}) => ["LIST_GAMES", params];

export const readGame = (id: number) => ["READ_GAME", id];

export const listUsers = (params: object = {}) => ["LIST_USERS", params];

export const readUser = (id: number) => ["READ_USER", id];

export const listCategories = () => ["LIST_CATEGORIES"];
