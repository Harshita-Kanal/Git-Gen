import React, { Component } from "react";
import "./generate.css";
import generate from "./imgitems.svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

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
      isOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calcuteValue = this.calcuteValue.bind(this);
    this.showResults = this.showResults.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    var user = this.state.name;
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

  showResults() {
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
    return usercard;
  }

  handleClose() {
    this.setState({
      isOpen: false,
    });
  }

  handleClickOpen() {
    this.setState({
      isOpen: true,
    });
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
        <br />
        <br />
        <Button
          onClick={this.handleClickOpen}
          variant="contained"
          color="secondary"
        >
          View Results
        </Button>
        <Dialog
          fullScreen
          open={this.state.isOpen}
          onClose={this.handleClose}
          // TransitionComponent={Transition}
        >
          <AppBar color="secondary">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={this.handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">Your Profile</Typography>
              {/* <Button autoFocus color="inherit" onClick={this.handleClose}>
                save
              </Button> */}
            </Toolbar>
          </AppBar>
          <br />
          <br />
          <br />
          <br />
          <div className="divAlign">
            <Card className="cardItem">
              <h1 align="center">{this.state.name}</h1>
              <img className="profImg" src={this.state.img}></img>
              <br />
              <span className="follow"> Followers: {this.state.followers}</span>
              &emsp;
              <span className="follow"> Following: {this.state.following}</span>
            </Card>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Generate;
