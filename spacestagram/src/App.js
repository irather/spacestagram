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
      likes: [],
    };
  }

  componentDidMount() {
    const apiKey = process.env.REACT_APP_API_KEY;

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => {
        this.setState({ photos: res.data, date: res.data.date }, () => {
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
        this.setState({ photos: res.data, date: res.data.date }, () => {
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

  toggleLike = () => {
    let index = -1;
    this.state.likes.forEach((l, idx) => {
      if (l.date === this.state.date) {
        index = idx;
      }
    });
    if (index < 0) {
      this.state.likes.push({
        date: this.state.date,
      });
    } else {
      this.state.likes.splice(index, 1);
    }
    this.setState({ likes: this.state.likes });
  };

  getSaved = () => {
    if (this.state.likes) {
      const found = this.state.likes.find((l) => l.date === this.state.date);
      return found ? true : false;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div>
        <h1>Spacestagram</h1>
        <DatePicker changeDate={this.changeDate} />
        <LikeBtn toggleLike={this.toggleLike} getSaved={this.getSaved} />
        <Photos photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
