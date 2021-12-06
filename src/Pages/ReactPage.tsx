import { Grid, Typography, Link } from "@mui/material";

// ToDo: Use global Fontsizes / Styling

const ReactPage = (props: any) => {
  return (
    <Grid container rowSpacing={{ xs: 2, lg: 10 }} columnSpacing={{ xs: 0.5, lg: 8 }}>
      <Grid item xs={12} md={10}>
        <Typography variant="h5" component="div">
          <p>React is my favorite Front End Frame work. This entire website is written in React.</p>
        </Typography>
        <br />
        <Typography variant="h6" component="div" style={{ fontSize: 18 }}>
          <p>
            I've created multiple Backend REST-APIs for this websites. All of these will be consumed by React. You can
            find examples as well as explanations here
          </p>
        </Typography>
        <div style={{ display: "Flex", justifyContent: "space-around", marginTop: 15 }}>
          <Link href="/frontend/react/nodemongo" underline="hover" style={{ color: "white", margin: 5 }}>
            REST Nodejs + MongoDB
          </Link>
          <Link href="/frontend/react/coresql" underline="hover" style={{ color: "white", margin: 5 }}>
            REST Asp.net Core + MySqlServer
          </Link>
          <Link href="/frontend/react/nodepostgres" underline="hover" style={{ color: "white", margin: 5 }}>
            REST Nodejs + Postgres
          </Link>
          <Link href="/frontend/react/graph" underline="hover" style={{ color: "white", margin: 5 }}>
            Graphql + ...
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default ReactPage;
