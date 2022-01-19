import React, { Component } from "react";
import DateSelector from "./components/dateSelector";
import Photos from "./components/photos";
import LikeBtn from "./components/likeBtn";
import NavBar from "./components/navBar";
import axios from "axios";
import moment from "moment";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Container fluid>
        <div className="landing">
          <Row>
            <NavBar />
          </Row>

          <div className="home-container">
            <Row>
              <Col lg="4" md="6" sm="12">
                {this.state.date && (
                  <DateSelector
                    onChange={this.changeDate}
                    date={new Date(this.state.date)}
                  />
                )}
              </Col>

              <Col lg="8" md="6" sm="12">
                <LikeBtn
                  toggleLike={this.toggleLike}
                  getSaved={this.getSaved}
                />
                <Photos photos={this.state.photos} />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
