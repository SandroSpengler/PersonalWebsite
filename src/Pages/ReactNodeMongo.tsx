import { Grid, Typography, Link } from "@mui/material";

const ReactNodeMongo = (props: any) => {
  return (
    <Grid container rowSpacing={{ xs: 2, lg: 10 }} columnSpacing={{ xs: 0.5, lg: 8 }}>
      <Grid item xs={12} md={10}>
        <Typography variant="h5" component="div">
          <p>Move Rest-Api with NodeJs, Express and MongoDB</p>
        </Typography>
        <br />
        <Typography variant="h6" component="div" style={{ fontSize: 18 }}>
          <p>
            I've created a simple Movie Api which allows you to choose from a few diffrent Movies and few the Characters
            that already exist. You can also add your own Movie and Characters.
          </p>
          <br />
          <p>
            This is only the React Front End for this Api. If you want to find out more about the REST-Api then click
            here.
          </p>
          <br />
          <p> This is only a demo site to try it out. </p>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReactNodeMongo;
