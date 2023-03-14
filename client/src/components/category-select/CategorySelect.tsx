import { useListCategories } from "../../lib/api/hooks/categories.hook";
import Select from "../common/select";

export type CategorySelectProps = {
  value?: number;
  onChange?: (categoryId: number | null) => void;
};

const CategorySelect: React.FC<CategorySelectProps> = ({ value, onChange }) => {
  const { data: categories } = useListCategories();

  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-gray-900"
        htmlFor="categories"
      >
        Categories
      </label>
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
