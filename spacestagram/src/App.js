import React, { Component } from "react";
import Photos from "./components/photos";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: "",
    };
  }

  componentDidMount() {
    console.log("mounted");

    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=2020-01-01&api_key=${apiKey}`
      )
      .then((res) => {
        console.log(res);
        this.setState({ photos: res.data }, () => {
          console.log("Successfully setted state");
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <h1>Spacestagram</h1>
        <Photos photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
