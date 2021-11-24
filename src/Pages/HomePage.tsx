import { Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material";

const HomePage = (props: any) => {
  const cardStyles = {
    backgroundColor: "#182333",
    color: "white",
    padding: "20px",
    width: {
      xs: "100%",
      lg: "100%",
    },
  };

  return (
    <Grid container columnSpacing={{ md: 8 }}>
      <Grid item xs={12} md={8}>
        <Card variant="outlined">
          <CardContent sx={cardStyles}>
            <Typography variant="h5" component="div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque dolore saepe? Sit illum praesentium
              nobis doloremque corrupti vero voluptatum placeat dolorum natus. Consequatur omnis est dolorem. Beatae,
              perferendis perspiciatis!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          display: {
            xs: "none",
            md: "inline",
          },
        }}
      >
        <Card variant="outlined">
          <CardContent sx={cardStyles}>
            <Typography variant="h5" component="div">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, et! Vel corporis porro illo!
              Reiciendis consequatur corporis aspernatur eum eius delectus ea omnis, et officia, quam officiis aperiam
              perferendis quaerat!
            </Typography>
          </CardContent>
        </Card>
        <Paper></Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
