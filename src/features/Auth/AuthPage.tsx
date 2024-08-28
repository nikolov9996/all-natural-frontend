import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "~/services/authSliceAPI";
import { setCredentials } from "./authSlice";

const AuthPage = () => {
  const dispatch = useDispatch();
  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation();
  return (
    <div>
      AuthPage
      {isError && <p>Error: {JSON.stringify(error)}</p>}
      {isLoading && <p>Loading</p>}
      {isSuccess && <p>Success</p>}
      <Button
        onClick={async () => {
          const resp = await login({
            username: "user 1",
            password: "will work with any password for now",
          }).unwrap();

          dispatch(setCredentials(resp));
        }}
      >
        login
      </Button>
    </div>
  );
};

export default AuthPage;
