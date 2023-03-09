import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("./pages"));

import homeLoader from "./pages/loader";

const routes: RouteObject[] = [
  { path: "/", element: <Home />, loader: homeLoader },
];

export default routes;
