import { useListCategories } from "../../lib/api/hooks/categories.hook";
import Label from "../common/label";
import Select from "../common/select";

export type CategorySelectProps = JSX.IntrinsicElements["select"] & {
  value?: number;
  isError?: boolean;
};

const CategorySelect: React.FC<CategorySelectProps> = ({
  value,
  onChange,
  isError,
  ...props
}) => {
  const { data: categories } = useListCategories();

  return (
    <div>
      <Label htmlFor="categories">Category</Label>
      <Select
        className="mt-22"
        value={value}
        isError={isError}
        onChange={onChange}
        {...props}
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
