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
        <ListItem button>
          <HomeIcon style={{ marginRight: 10 }}></HomeIcon>
          <Link href="/home" underline="none">
            <ListItemText primary={"Page"} />
          </Link>
        </ListItem>

        <ListItem button>
          <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
          <Link href="/page1" underline="none">
            <ListItemText primary={"Page"} />
          </Link>
        </ListItem>

        <ListItem button>
          <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
          <Link href="/home" underline="none">
            <ListItemText primary={"Page"} />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
          <Link href="/home" underline="none">
            <ListItemText primary={"About"} />
          </Link>
        </ListItem>

        <ListItem button>
          <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
          <Link href="/home" underline="none">
            <ListItemText primary={"Other"} />
          </Link>
        </ListItem>
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
