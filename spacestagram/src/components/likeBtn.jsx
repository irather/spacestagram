import React, { useEffect, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/likeBtn.css";

const LikeBtn = (props) => {
  const [color, setColor] = useState({ hex: "#dddddd" });

  useEffect(() => {
    if (props.getSaved()) {
      setColor({ hex: "#FF0000" });
    } else {
      setColor({ hex: "#dddddd" });
    }
  }, [props]);

  return (
    <div className="likeBtn-container">
      <button className="likeButton" onClick={props.toggleLike}>
        <FontAwesomeIcon
          icon={faHeart}
          size="3x"
          style={{ color: color.hex }}
        />
      </button>
    </div>
  );
};

export default LikeBtn;
