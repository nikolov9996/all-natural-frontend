import { memo, useState } from "react";
import {
  SwipeableDrawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import SignInIcon from "@mui/icons-material/Login";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~/static/contants";
import { useAppSelector } from "~/app/hooks";
import { selectCurrentUser } from "~/features/Auth/authSlice";
import { User } from "~/services/types";

const Drawer: React.FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);

  const [state, setState] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const AuthItem = memo(({ user }: { user: User | null }) => {
    if (user) {
      return (
        <ListItemButton onClick={() => navigate(ROUTES.PROFILE)}>
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText primary={"Profile"} />
        </ListItemButton>
      );
    } else {
      return (
        <ListItemButton onClick={() => navigate(ROUTES.AUTH_PAGE)}>
          <ListItemIcon>
            <SignInIcon />
          </ListItemIcon>
          <ListItemText primary={"Sign in"} />
        </ListItemButton>
      );
    }
  });

  const list = () => (
    <Box // TODO add to .style file with mobile version
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <AuthItem user={user} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate(ROUTES.MESSAGES)}>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={"Messages"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          {/* TODO show this only on admin profile */}
          <ListItemButton onClick={() => navigate(ROUTES.SENSOR)}>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={"Sensor"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon style={{ color: "whitesmoke" }} />
        </IconButton>
        <SwipeableDrawer
          anchor={"right"}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </>
    </div>
  );
};

export default Drawer;
