import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";

const ReactNodeMongo = (props: any) => {
  const initialDescription = () => {
    return (
      <div>
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
        </Typography>
      </div>
    );
  };

  const showList = () => {
    return (
      <Grid item xs={6}>
        <Paper style={{ height: "300px" }}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    );
  };

  return (
    <Grid container rowSpacing={{ xs: 2, lg: 10 }} columnSpacing={{ xs: 0.5, lg: 8 }}>
      <Grid item xs={12} md={10}>
        {initialDescription()}
        {showList()}
      </Grid>
    </Grid>
  );
};

export default ReactNodeMongo;
