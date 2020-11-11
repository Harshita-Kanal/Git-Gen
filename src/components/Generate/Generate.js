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
      users: {},
      img: "",
      followers: "",
      following: "",
      login: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calcuteValue = this.calcuteValue.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calcuteValue();
    this.setState({
      name: "",
    });
    console.log(this.state);
  }

  calcuteValue() {
    var users = [];

    for (var i = 0; i <= 1; i++) {
      users.push(prompt("Enter your Github user name"));
    }

    for (var user of users) {
      fetch(`https://api.github.com/users/${user}`)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          console.log(responseJson);
          var res = responseJson;
          this.setState({
            users: res,
            followers: res.followers,
            following: res.following,
            img: res.avatar_url,
            name: res.login,
          });
          console.log(res.followers);
          console.log(res.following);
        });
    }
  }

  render() {
    const isUser = this.state.user;
    let usercard;
    if (isUser != null) {
      usercard = (
        <Card>
          <p>{this.state.name}</p>
          <p>
            Followers <h2>{this.state.followers}</h2>
          </p>
          <p>
            Following <h2>{this.state.following}</h2>
          </p>
        </Card>
      );
    } else {
      usercard = <div></div>;
    }

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
        <br />
        <br />
        {usercard}
      </div>
    );
  }
}

export default Generate;
