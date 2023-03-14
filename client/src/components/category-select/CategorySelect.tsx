import { useListCategories } from "../../lib/api/hooks/categories.hook";
import Label from "../common/label";
import Select from "../common/select";

export type CategorySelectProps = {
  value?: number;
  onChange?: (categoryId: number | null) => void;
};

const CategorySelect: React.FC<CategorySelectProps> = ({ value, onChange }) => {
  const { data: categories } = useListCategories();

  return (
    <div>
      <Label htmlFor="categories">Categories</Label>
      <Select
        value={value}
        onChange={(e) => {
          return onChange?.(e.target.value ? Number(e.target.value) : null);
        }}
      >
        <option value={0}>Empty</option>
        {categories?.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default CategorySelect;
