import React, { Component } from "react";
import DatePicker from "./components/datePicker";
import Photos from "./components/photos";
import LikeBtn from "./components/likeBtn";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      photos: "",
    };
  }

  componentDidMount() {
    console.log("mounted");

    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => {
        console.log(res);
        this.setState({ photos: res.data }, () => {
          console.log("Successfully setted state");
        });
      })
      .catch(console.log);
  }

  getPhoto = (date) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`)
      .then((res) => {
        console.log(res);
        this.setState({ photos: res.data }, () => {
          console.log("Successfully setted state");
        });
      })
      .catch(console.log);
  };

  changeDate = (e) => {
    e.preventDefault();
    const inputDate = e.target[0].value;
    this.setState({ date: inputDate });
    this.getPhoto(inputDate);
  };

  render() {
    return (
      <div>
        <h1>Spacestagram</h1>
        <DatePicker changeDate={this.changeDate} />
        <Photos photos={this.state.photos} />
        <LikeBtn />
      </div>
    );
  }
}

export default App;
