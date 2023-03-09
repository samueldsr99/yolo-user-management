import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./pages"));
const UsersPage = lazy(() => import("./pages/users"));
const GamesPage = lazy(() => import("./pages/games"));

import homeLoader from "./pages/loader";
import usersLoader from "./pages/users/loader";
import gamesLoader from "./pages/games/loader";

const routes: RouteObject[] = [
  { path: "/", element: <HomePage />, loader: homeLoader },
  { path: "/users", element: <UsersPage />, loader: usersLoader },
  { path: "/games", element: <GamesPage />, loader: gamesLoader },
];

export default routes;
