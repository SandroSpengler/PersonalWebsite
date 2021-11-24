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
        <AppBar position="static" style={{ backgroundColor: "#10162b" }}>
          <Toolbar
            variant="dense"
            color="secondary"
            style={{ height: 60, display: "flex", justifyContent: "space-between" }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setshowNavigationDrawer(!showNavigationDrawer);
              }}
            >
              <MenuIcon />
            </IconButton>

            <div>
              <Link href="/" underline="hover" style={{ color: "white", margin: 10 }}>
                Home
              </Link>
              <Link href="/frontend" underline="hover" style={{ color: "white", margin: 10 }}>
                Front End
              </Link>
              <Link href="/backend" underline="hover" style={{ color: "white", margin: 10 }}>
                Back End
              </Link>
              <Link href="/devops" underline="hover" style={{ color: "white", margin: 10 }}>
                Dev Ops
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <NavigationDrawer show={showNavigationDrawer} updateShow={changeShowNavigationDrawer} />
      </div>
    </div>
  );
};

export default Header;
