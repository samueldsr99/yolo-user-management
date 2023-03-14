import type { QueryClient } from "react-query";
import type { LoaderFunction } from "react-router-dom";

export default function (_queryClient: QueryClient): LoaderFunction {
  return async () => null;
}
