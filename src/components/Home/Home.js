import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import Resume from "./resume.svg";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <div className="item">
      <Grid container>
        <Grid spacing={2} xs={12} sm={6}>
          <img src={Resume} className="imgItem" />
        </Grid>
        <Grid>
          <p className="textItem">
            Generate your personal resume <br /> from your GitHub Profile
          </p>
          <Button variant="contained" color="secondary">
            Get Started!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
