import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import Resume from "./resume.svg";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  return (
    <div className="item">
      <br />
      <br />
      <Grid container>
        <Grid spacing={2} xs={12} sm={6}>
          <img src={Resume} className="Item" />
        </Grid>
        <Grid>
          <Typography>
            <p className="textItem">
              Generate your personal resume <br /> from your GitHub Profile
            </p>
            <Button href="/generate" variant="contained" color="secondary">
              Get Started!
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
