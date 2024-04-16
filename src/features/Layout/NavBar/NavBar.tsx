import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, AppBar, Toolbar } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "./NavBar.styles";
import Drawer from "./Drawer";

const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <Drawer />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
