import { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { ROUTES } from "~/static/contants";

const Drawer: React.FC = () => {
  const navigate = useNavigate();
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

  const list = () => (
    <Box // TODO add to .style file with mobile version
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate(ROUTES.PROFILE)}>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={"Messages"} />
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
