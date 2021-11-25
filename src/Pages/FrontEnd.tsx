import { Card, CardActionArea, CardContent, Grid, ImageListItem } from "@mui/material";

const FrontEnd = (props: any) => {
  const cardStyles = {
    backgroundColor: "#182333",
    color: "white",
    fontSize: {
      xs: "16px",
      lg: "22px",
    },
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

      <Grid item xs={6} md={3}>
        <Card variant="outlined">
          <CardActionArea href="/frontend/react">
            <CardContent sx={cardStyles}>
              <img
                width={"100%"}
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuK8Cj7HPEpyW-E9nO2PPWlf8-L9s9ulf2HRtpegwC1KhuCjGk4LSnRUxo1hz0hBiJ1h4&usqp=CAU`}
                loading="lazy"
                alt={"React"}
              />

              <ImageListItem key={0}>
                <h5> React + TypeScript</h5>
              </ImageListItem>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={6} md={3}>
        <Card variant="outlined">
          <CardActionArea href="/frontend/js">
            <CardContent sx={cardStyles}>
              <img
                width={"100%"}
                src={`https://devporai.com.br/wp-content/uploads/2020/06/Copy-of-Copy-of-Travel-Photography.png`}
                loading="lazy"
                alt={"JavaScript"}
              />

              <ImageListItem key={0}>
                <h5> Native Javascript</h5>
              </ImageListItem>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card variant="outlined">
          <CardActionArea href="/frontend/js">
            <CardContent sx={cardStyles}>
              <img
                width={"100%"}
                src={`https://www.cloudsavvyit.com/p/uploads/2021/02/c123ee3a.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1`}
                loading="lazy"
                alt={"JavaScript"}
              />

              <ImageListItem key={0}>
                <h5> Native Javascript</h5>
              </ImageListItem>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card variant="outlined">
          <CardActionArea href="/frontend/vb">
            <CardContent sx={cardStyles}>
              <img
                width={"100%"}
                src={`https://upanastudio.com/uploads/blogs/6cc67f82479e9f7028707df430e876ee.png`}
                loading="lazy"
                alt={"VBNet"}
              />

              <ImageListItem key={1}>
                <h5> VB.Net + WinForms</h5>
              </ImageListItem>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FrontEnd;
