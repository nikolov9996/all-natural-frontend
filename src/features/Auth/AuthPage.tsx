import { Button, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "~/services/APISlice";
import { setCredentials, signOut } from "./authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuthPage from "./AuthPage.logic";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~/static/contants";

type Inputs = {
  username: string;
  password: string;
};

const AuthPage = () => {
  const navigate = useNavigate();
  const { decodeJWT } = useAuthPage();
  const dispatch = useDispatch();
  const [login, { isLoading, isError, isSuccess, error, data }] =
    useLoginMutation();
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

    const decodedJwt = decodeJWT(resp.access_token);
    if (!decodedJwt) {
      dispatch(signOut());
      return; // set basic error toast
    }
    dispatch(
      setCredentials({
        access_token: resp.access_token,
        refresh_token: resp.refresh_token,
        user: decodedJwt,
      })
    );
    navigate(ROUTES.PROFILE);
  };

  return (
    <div>
      AuthPage
      {isError && <p>Error: {JSON.stringify(error)}</p>}
      {isLoading && <p>Loading</p>}
      {isSuccess && (
        <p>Success: response: {JSON.stringify(data?.access_token, null, 2)}</p>
      )}
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
