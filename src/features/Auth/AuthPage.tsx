import { Button, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "~/services/APISlice";
import { setCredentials } from "./authSlice";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

const AuthPage = () => {
  const dispatch = useDispatch();
  const [login, { isLoading, isError, isSuccess, error, data }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ password, username }) => {
    const resp = await login({
      username,
      password,
    }).unwrap();
    dispatch(setCredentials(resp));
  };
  return (
    <div>
      AuthPage
      {isError && <p>Error: {JSON.stringify(error)}</p>}
      {isLoading && <p>Loading</p>}
      {isSuccess && <p>Success: response: {JSON.stringify(data?.user,null,2)}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input defaultValue="user 1" {...register("username")} />

        <Input
          type="password"
          defaultValue="will work with any password for now"
          {...register("password", { required: true })}
        />
        <Button type="submit">login</Button>
        {errors.password && <span>Username field is required</span>}
        {errors.password && <span>Password field is required</span>}
      </form>
    </div>
  );
};

export default AuthPage;
