//importing packages starts here
import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//importing packages ends here

//component styling starts here
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
    height: "70px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    backgroundColor: "#01579b",
  },
  icon: {
    marginRight: theme.spacing(2),
  },

  card: {
    maxHeight: "200%",
    display: "block",
    flexDirection: "column",
    minWidth: "200px",
    marginLeft: "13.5px",
    marginRight: "13.5px",
    float: "right",
    width: "100px",
    height: "100px",
    position: "center",
    borderRadius: "7px",
    justifyContent: "space-evenly",
    boxSizing: "border-box",
  },
  cardMedia: {
    paddingTop: "6.25%", // 16:9
    paddingButtom: "6.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));
//component styling ends here

//function starts here
export default function Covid19() {
  const classes = useStyles();
  const [stats, handleStats] = useState([]);
  useEffect(() => {
    FetchData();
  }, []);

  //data fetching from the api
  const FetchData = async () => {
    const data = await fetch("https://corona.lmao.ninja/v3/covid-19/all"); //data source
    const stats = await data.json();
    //console.log(stats);
    handleStats(stats);
  };

  const formatter = new Intl.NumberFormat("en");
  //console.log(formatter.format(stats.cases));

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="row">
          <div className="col-xl-4 mt-5">
            <img
              className="img-fluid border-0"
              src="images/medical.svg"
              alt=""
            />
          </div>
          <div className="col">
            <div className="row mt-5">
              <div className="col text-center">
                <h1>Estadística Global Covid-19</h1>
              </div>
            </div>
            {/* Card starts here */}
            <Container className={classes.cardGrid}>
              <br />
              <br />
              <Grid container spacing={0} justify="space-evenly">
                <Card className={classes.card} variant="outlined" elevation={3}>
                  <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center">
                      <Typography color="secondary" style={{ fontSize: 14 }}>
                        TOTAL CASOS
                      </Typography>
                      <Divider />
                      <Typography color="primary" style={{ fontSize: 18 }}>
                        {formatter.format(stats.cases)}
                      </Typography>
                    </CardMedia>
                  </CardContent>
                </Card>

                <Card className={classes.card} variant="outlined">
                  <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center">
                      <Typography color="secondary" style={{ fontSize: 14 }}>
                        TOTAL MUERTES
                      </Typography>
                      <Divider />
                      <Typography color="primary" style={{ fontSize: 18 }}>
                        {formatter.format(stats.deaths)}
                      </Typography>
                    </CardMedia>
                  </CardContent>
                </Card>

                <Card className={classes.card} variant="outlined">
                  <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center">
                      <Typography color="secondary" style={{ fontSize: 14 }}>
                        RECUPERADOS
                      </Typography>
                      <Divider />
                      <Typography color="primary" style={{ fontSize: 18 }}>
                        {formatter.format(stats.recovered)}
                      </Typography>
                    </CardMedia>
                  </CardContent>
                </Card>
              </Grid>
              <br />
              <Grid container spacing={0} justify="space-evenly">
                <Card className={classes.card} variant="outlined">
                  <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center">
                      <Typography color="secondary" style={{ fontSize: 14 }}>
                        TOTAL TESTS
                      </Typography>
                      <Divider />
                      <Typography color="primary" style={{ fontSize: 18 }}>
                        {formatter.format(stats.tests)}
                      </Typography>
                    </CardMedia>
                  </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                  <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center">
                      <Typography color="secondary" style={{ fontSize: 14 }}>
                        CASOS ACTIVOS
                      </Typography>
                      <Divider />
                      <Typography color="primary" style={{ fontSize: 18 }}>
                        {formatter.format(stats.active)}
                      </Typography>
                    </CardMedia>
                  </CardContent>
                </Card>
                <Card className={classes.card} variant="outlined">
                  <CardContent className={classes.cardContent}>
                    <CardMedia className={classes.cardMedia} align="center">
                      <Typography color="secondary" style={{ fontSize: 14 }}>
                        PAISES AFECTADOS
                      </Typography>
                      <Divider />
                      <Typography color="primary" style={{ fontSize: 18 }}>
                        {formatter.format(stats.affectedCountries)}
                      </Typography>
                    </CardMedia>
                  </CardContent>
                </Card>
              </Grid>
              <br />
              <br />
            </Container>
            {/* Card ends here */}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
