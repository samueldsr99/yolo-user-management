import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./pages"));
const UsersPage = lazy(() => import("./pages/users"));
const GamesPage = lazy(() => import("./pages/games"));
const NewGamePage = lazy(() => import("./pages/games/new"));
const NewUserPage = lazy(() => import("./pages/users/new"));
const GameDetailsPage = lazy(() => import("./pages/games/details"));
const UserDetailsPage = lazy(() => import("./pages/users/details"));

import homeLoader from "./pages/loader";
import usersLoader from "./pages/users/loader";
import gamesLoader from "./pages/games/loader";
import newGameLoader from "./pages/games/new/loader";
import newUserLoader from "./pages/users/new/loader";
import gamesDetailsLoader from "./pages/games/details/loader";
import userDetailsLoader from "./pages/users/details/loader";

const routes: RouteObject[] = [
  { path: "/", element: <HomePage />, loader: homeLoader },
  { path: "/users", element: <UsersPage />, loader: usersLoader },
  { path: "/users/new", element: <NewUserPage />, loader: newUserLoader },
  { path: "/games", element: <GamesPage />, loader: gamesLoader },
  { path: "/games/new", element: <NewGamePage />, loader: newGameLoader },
  {
    path: "/games/:id",
    element: <GameDetailsPage />,
    loader: gamesDetailsLoader,
  },
  {
    path: "/users/:id",
    element: <UserDetailsPage />,
    loader: userDetailsLoader,
  },
];

export default routes;
