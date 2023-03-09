import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
