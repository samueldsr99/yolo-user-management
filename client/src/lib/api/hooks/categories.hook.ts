import { useQuery } from "react-query";
import { listCategories } from "../categories";

import * as querykeys from "../querykeys";

export const useListCategories = () =>
  useQuery(querykeys.listCategories(), () => listCategories());
