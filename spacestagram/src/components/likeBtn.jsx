import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LikeBtn extends Component {
  constructor() {
    super();
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      liked: false,
    };
  }

  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  }

  toggleLike = () => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  render() {
    const changeColour = this.state.liked ? "red" : "grey";

    return (
      <div>
        <button className="likeButton" onClick={this.toggleLike}>
          <FontAwesomeIcon
            icon={faHeart}
            size="3x"
            style={{ color: changeColour }}
          />
        </button>
      </div>
    );
  }
}

export default LikeBtn;
