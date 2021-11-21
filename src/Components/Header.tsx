import { useState } from "react";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationDrawer from "./NavigationDrawer";

const Header = (props: any) => {
  const [showNavigationDrawer, setshowNavigationDrawer] = useState(false);

  const changeShowNavigationDrawer = (): boolean => {
    setshowNavigationDrawer(!showNavigationDrawer);

    return showNavigationDrawer;
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense" style={{ height: 60 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setshowNavigationDrawer(!showNavigationDrawer);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <NavigationDrawer show={showNavigationDrawer} updateShow={changeShowNavigationDrawer} />
    </div>
  );
};

export default Header;
