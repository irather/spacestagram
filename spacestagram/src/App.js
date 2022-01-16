import React, { Component } from "react";
import DateSelector from "./components/dateSelector";
import Photos from "./components/photos";
import LikeBtn from "./components/likeBtn";
import axios from "axios";
import moment from "moment";
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
          //console.log("Successfully setted state");
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
          //console.log("Successfully setted state");
        });
      })
      .catch(console.log());
  };

  formatDate = (inputDate) => {
    const momentDate = moment(inputDate);
    momentDate.add(1, "d");
    return momentDate.format("yyyy-MM-DD");
  };

  changeDate = (inputDate, event) => {
    const strDate = this.formatDate(inputDate);
    this.setState({ date: strDate });
    this.getPhoto(strDate);
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
        {this.state.date && (
          <DateSelector
            onChange={this.changeDate}
            date={new Date(this.state.date)}
          />
        )}
        <LikeBtn toggleLike={this.toggleLike} getSaved={this.getSaved} />
        <Photos photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
