import { useState } from "react";

import { AppBar, Box, IconButton, Link, Toolbar } from "@mui/material";
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
          <Toolbar variant="dense" style={{ height: 60, display: "flex", justifyContent: "space-between" }}>
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

            <div>
              <Link color="secondary" href="/" style={{ color: "white", margin: 10 }}>
                Home
              </Link>
              <Link color="secondary" href="/page1" style={{ color: "white", margin: 10 }}>
                Page
              </Link>
              <Link color="secondary" href="/page1" style={{ color: "white", margin: 10 }}>
                Page
              </Link>
              <Link color="secondary" href="/page1" style={{ color: "white", margin: 10 }}>
                Page
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <NavigationDrawer show={showNavigationDrawer} updateShow={changeShowNavigationDrawer} />
    </div>
  );
};

export default Header;
