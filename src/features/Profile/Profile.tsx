import { Button } from "@mui/material";
import { useAppDispatch } from "~/app/hooks";
import { signOut } from "../Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~/static/contants";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      Profile
      <Button onClick={handleSignOut}>sign out</Button>
    </div>
  );
};

export default Profile;
