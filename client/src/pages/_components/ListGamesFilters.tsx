import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import CategorySelect from "../../components/category-select";
import Button from "../../components/common/button";
import Input from "../../components/common/input/Input";
import Label from "../../components/common/label";
import { buildUrl } from "../../lib/utils";

const ListGamesFilters: React.FC = () => {
  const [params] = useSearchParams();
  const [category, setCategory] = React.useState<number | null>(
    Number(params.get("category"))
  );
  const [startDate, setStartDate] = React.useState<string | null>(
    params.get("startDate")
  );
  const [endDate, setEndDate] = React.useState<string | null>(
    params.get("endDate")
  );
  const navigate = useNavigate();

  const handleClick = React.useCallback(() => {
    const query = {
      ...(category && { category }),
      ...(startDate && { startDate }),
      ...(endDate && { endDate }),
    };

    const redirectUrl = buildUrl("/games", query);
    return navigate(redirectUrl);
  }, [category, startDate, endDate, navigate]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CategorySelect
          value={category ?? undefined}
          onChange={(categoryId) => setCategory(categoryId)}
        />
        <div>
          <Label htmlFor="startDate">Start date</Label>
          <Input
            className="w-full"
            type="date"
            value={startDate ?? ""}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="startDate">End date</Label>
          <Input
            className="w-full"
            type="date"
            value={endDate ?? ""}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <Button className="mt-4" onClick={handleClick}>
        Filter
      </Button>
    </div>
  );
};

export default ListGamesFilters;
