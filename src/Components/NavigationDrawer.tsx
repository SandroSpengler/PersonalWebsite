import {
  Divider,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
  Link,
  Container,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NavigationDrawer = (props: { show: boolean; updateShow: any }) => {
  const drawerList = (
    <Container
      sx={{
        width: {
          xs: 250,
          lg: 400,
        },
      }}
    >
      <Toolbar variant="dense">
        <Typography variant="h5" color="inherit" component="div">
          Navigation
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <Link href="/home" underline="none">
          <ListItem button>
            <HomeIcon style={{ marginRight: 10 }}></HomeIcon>
            <ListItemText primary={"Page"} />
          </ListItem>
        </Link>

        <Link href="/page1" underline="none">
          <ListItem button>
            <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
            <ListItemText primary={"Page"} />
          </ListItem>
        </Link>

        <Link href="/page1" underline="none">
          <ListItem button>
            <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
            <ListItemText primary={"Page"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/page1" underline="none">
          <ListItem button>
            <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
            <ListItemText primary={"About"} />
          </ListItem>
        </Link>

        <Link href="/page1" underline="none">
          <ListItem button>
            <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
            <ListItemText primary={"Other"} />
          </ListItem>
        </Link>
      </List>
    </Container>
  );

  const drawer = (show: boolean) => {
    return (
      <SwipeableDrawer
        className="drawerWrapper"
        open={show}
        onClose={() => props.updateShow()}
        onOpen={() => props.updateShow()}
      >
        {drawerList}
      </SwipeableDrawer>
    );
  };

  return <div>{drawer(props.show)}</div>;
};

export default NavigationDrawer;
