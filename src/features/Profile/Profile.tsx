import { Button } from "@mui/material";
import { useAppDispatch } from "~/app/hooks";
import { selectCurrentUser, signOut } from "../Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~/static/contants";
import { useSelector } from "react-redux";
import { useLazyGetProfileQuery } from "~/services/APISlice";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [UseLazyProfileTrigger, UseQueryProfileResult] =
    useLazyGetProfileQuery();
  const handleSignOut = () => {
    dispatch(signOut());
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      Profile:
      <pre>{JSON.stringify(currentUser, null, 4)}</pre>
      <pre>{JSON.stringify(UseQueryProfileResult?.data, null, 4)}</pre>
      <p>Error:{JSON.stringify(UseQueryProfileResult?.error)}</p>
      <p>Loading:{UseQueryProfileResult.isLoading ? "yes" : "no"}</p>
      <Button onClick={handleSignOut}>sign out</Button>
      <Button onClick={() => UseLazyProfileTrigger(currentUser?.userId || "")}>
        get User data
      </Button>
    </div>
  );
};

export default Profile;
