import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import CreateLayout from "../../../layouts/CreateLayout";
import Label from "../../../components/common/label";
import CategorySelect from "../../../components/category-select/CategorySelect";
import Button from "../../../components/common/button";
import Input from "../../../components/common/input";
import ErrorMessage from "../../../components/error-message/ErrorMessage";
import FormControl from "../../../components/form-control/FormControl";
import { useCreateGameMutation } from "../../../lib/api/hooks/games.hook";

const createGameSchema = z.object({
  categoryId: z
    .number()
    .min(1, { message: "You should select a game category" }),
  name: z.string().min(1),
  description: z.string().optional(),
  imageUrl: z.union([z.literal(""), z.string().trim().url()]),
});

type CreateGameForm = z.infer<typeof createGameSchema>;

const NewGamePage: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateGameForm>({
    resolver: zodResolver(createGameSchema),
    mode: "onSubmit",
    defaultValues: {
      categoryId: 0,
      name: "",
      description: "",
      imageUrl: "",
    },
  });
  const navigate = useNavigate();
  const { mutateAsync: createGame, isLoading: isMutating } =
    useCreateGameMutation();
  console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    await createGame(data);
    navigate("/games");
  });

  return (
    <CreateLayout title="Create game">
      <form className="divide-y divide-gray-300" onSubmit={onSubmit}>
        <div className="py-10">
          <Controller
            control={control}
            name="categoryId"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <CategorySelect
                  className="max-w-none md:max-w-[300px]"
                  value={value}
                  onChange={onChange}
                  isError={!!errors.categoryId}
                />
                {errors.categoryId && (
                  <ErrorMessage>{errors.categoryId.message}</ErrorMessage>
                )}
              </FormControl>
            )}
          />
        </div>
        <div className="py-10 flex flex-col gap-6">
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <Label htmlFor="name">Name</Label>
                <Input
                  className="max-w-none md:max-w-[300px]"
                  type="text"
                  placeholder="Name"
                  value={value}
                  onChange={onChange}
                  isError={!!errors.name}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="imageUrl"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <Label htmlFor="description">Image url</Label>
                <Input
                  className="max-w-none md:max-w-[300px]"
                  type="text"
                  placeholder="https://some-url.com"
                  value={value}
                  onChange={onChange}
                  isError={!!errors.imageUrl}
                />
                {errors.imageUrl && (
                  <ErrorMessage>{errors.imageUrl.message}</ErrorMessage>
                )}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <Label htmlFor="description">Description</Label>
                <textarea
                  value={value}
                  onChange={onChange}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 text-md sm:leading-6"
                  rows={4}
                />
              </FormControl>
            )}
          />
        </div>
        <div className="py-8 flex justify-end gap-4">
          <Link to="/games">
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Button type="submit" isLoading={isMutating} disabled={isMutating}>
            Submit
          </Button>
        </div>
      </form>
    </CreateLayout>
  );
};

export default NewGamePage;
