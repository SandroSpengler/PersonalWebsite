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
  const styles = {
    sx: {
      backgroundColor: "#0d111f",
      color: "white",
      width: {
        xs: 250,
        lg: 400,
      },
    },
  };

  const drawerList = (
    <Container>
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
            <Typography fontSize={16} color="white" display="block" variant="caption">
              Home
            </Typography>
          </ListItem>
        </Link>
        <Link href="/page1" underline="none">
          <ListItem button>
            <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
            <Typography fontSize={16} color="white" display="block" variant="caption">
              React
            </Typography>
          </ListItem>
        </Link>
        <Link href="/page1" underline="none">
          <ListItem button>
            <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
            <Typography fontSize={16} color="white" display="block" variant="caption">
              Angular
            </Typography>
          </ListItem>
        </Link>
        <Link href="/page1" underline="none">
          <ListItem button>
            <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
            <Typography fontSize={16} color="white" display="block" variant="caption">
              Java Script
            </Typography>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/page1" underline="none">
          <ListItem button>
            <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
            <Typography fontSize={16} color="white" display="block" variant="caption">
              About
            </Typography>
          </ListItem>
        </Link>

        <Link href="/page1" underline="none">
          <ListItem button>
            <ArrowForwardIosIcon style={{ marginRight: 10 }}></ArrowForwardIosIcon>
            <Typography fontSize={16} color="white" display="block" variant="caption">
              Other
            </Typography>
          </ListItem>
        </Link>
      </List>
    </Container>
  );

  const drawer = (show: boolean) => {
    return (
      <SwipeableDrawer
        PaperProps={styles}
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
