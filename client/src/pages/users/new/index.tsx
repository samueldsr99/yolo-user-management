import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

import Label from "../../../components/common/label";
import Input from "../../../components/common/input";
import ErrorMessage from "../../../components/error-message";
import FormControl from "../../../components/form-control";
import CreateLayout from "../../../layouts/CreateLayout";
import { useCreateUserMutation } from "../../../lib/api/hooks/users.hook";
import Button from "../../../components/common/button";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  address: z.object({
    line1: z.string().min(1),
    line2: z.string().optional(),
    country: z.string().min(1),
    city: z.string().min(1),
  }),
});

type CreateUserForm = z.infer<typeof createUserSchema>;

const NewUserPage: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUserForm>({
    mode: "onSubmit",
    resolver: zodResolver(createUserSchema),
  });
  const navigate = useNavigate();
  const { mutateAsync: createUser, isLoading: isMutating } =
    useCreateUserMutation();

  const onSubmit = handleSubmit(async (data) => {
    await createUser(data);
    navigate("/");
  });

  return (
    <CreateLayout title="Create user">
      <form className="divide-y divide-gray-300" onSubmit={onSubmit}>
        <div className="py-10 flex flex-col gap-6">
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <Label htmlFor="email">Email</Label>
                <Input
                  className="max-w-none md:max-w-[300px]"
                  type="email"
                  value={value}
                  onChange={onChange}
                  isError={!!errors.email}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <Label htmlFor="name">Name</Label>
                <Input
                  className="max-w-none md:max-w-[300px]"
                  type="text"
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
        </div>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <Controller
            control={control}
            name="address.line1"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <Label htmlFor="address.line1">Line 1</Label>
                <Input
                  value={value}
                  onChange={onChange}
                  isError={!!errors.address?.line1}
                />
                {errors.address?.line1 && (
                  <ErrorMessage>{errors.address.line1.message}</ErrorMessage>
                )}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="address.line2"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <Label htmlFor="address.line2">Line 2</Label>
                <Input
                  value={value}
                  onChange={onChange}
                  isError={!!errors.address?.line2}
                />
                {errors.address?.line2 && (
                  <ErrorMessage>{errors.address.line2.message}</ErrorMessage>
                )}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="address.city"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <Label htmlFor="address.city">City</Label>
                <Input
                  value={value}
                  onChange={onChange}
                  isError={!!errors.address?.city}
                />
                {errors.address?.city && (
                  <ErrorMessage>{errors.address.city.message}</ErrorMessage>
                )}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="address.country"
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <Label htmlFor="address.country">Country</Label>
                <Input
                  value={value}
                  onChange={onChange}
                  isError={!!errors.address?.country}
                />
                {errors.address?.country && (
                  <ErrorMessage>{errors.address.country.message}</ErrorMessage>
                )}
              </FormControl>
            )}
          />
        </div>
        <div className="py-8 flex justify-end gap-4">
          <Link to="/users">
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

export default NewUserPage;
