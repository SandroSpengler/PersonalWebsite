import { Grid } from "@mui/material";

const ReactPage = () => {
  return (
    <Grid container rowSpacing={{ xs: 2, lg: 10 }} columnSpacing={{ xs: 0.5, lg: 8 }}>
      <Grid item xs={12} md={10}>
        <h3>
          <p>React is my faviorite Front End Frame work. This entire website is written in React.</p>
          <br />
          <p>There is alot to talk about ...</p>
        </h3>
      </Grid>
    </Grid>
  );
};

export default ReactPage;
