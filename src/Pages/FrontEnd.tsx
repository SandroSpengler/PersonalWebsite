import { Card, CardContent, Grid } from "@mui/material";

const FrontEnd = (props: any) => {
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
    <Grid container rowSpacing={{ xs: 2, lg: 10 }} columnSpacing={{ xs: 0.5, lg: 8 }}>
      <Grid item xs={12} md={12}>
        <h3>
          <p>
            These are the Frameworks that I have used as a developer. Feel free to click on one and dive deeper into an
            example.
          </p>
        </h3>
      </Grid>
      <Grid item xs={4} md={3}>
        <Card variant="outlined">
          <CardContent sx={cardStyles}>
            <h5> React + TypeScript</h5>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} md={3}>
        <Card variant="outlined">
          <CardContent sx={cardStyles}>
            <h5> Angular + TypeScript</h5>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} md={3}>
        <Card variant="outlined">
          <CardContent sx={cardStyles}>
            <h5> Native Javascript</h5>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} md={3}>
        <Card variant="outlined">
          <CardContent sx={cardStyles}>
            <h5> VB.Net + WinForms</h5>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FrontEnd;
