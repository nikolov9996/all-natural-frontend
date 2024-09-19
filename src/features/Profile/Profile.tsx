import { Button } from "@mui/material";
import { useAppDispatch } from "~/app/hooks";
import { selectCurrentUser, signOut } from "../Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~/static/contants";
import { useSelector } from "react-redux";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const handleSignOut = () => {
    dispatch(signOut());
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      Profile:
      <pre>{JSON.stringify(currentUser, null, 4)}</pre>
      <Button onClick={handleSignOut}>sign out</Button>
    </div>
  );
};

export default Profile;
