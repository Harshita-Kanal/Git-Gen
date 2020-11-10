import React, { Component } from "react";
import "./generate.css";
import generate from "./imgitems.svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

class Generate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="generate">
        <h1>Generate your Resume!</h1>
        <Card className="cardItem">
          <div className="item">
            <img className="imgItem" src={generate} />
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  required
                  id="standard"
                  label="Enter your Username"
                  defaultValue={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                />
                <Button type="submit" variant="contained" color="secondary">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    );
  }
}

export default Generate;
