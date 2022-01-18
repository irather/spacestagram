import React from "react";
import "../styles/photos.css";

const Photos = (props) => {
  function checkContentType() {
    if (props.photos.media_type === "image") {
      return (
        <img
          className="apodimg-container"
          src={props.photos.url}
          alt={props.photos.title}
        />
      );
    } else if (props.photos.media_type === "video") {
      return (
        <iframe
          type="text/html"
          src={props.photos.url}
          alt={props.photos.title}
          frameBorder="0"
        ></iframe>
      );
    } else {
      return;
    }
  }

  return (
    <div>
      {checkContentType()}
      <h3>
        {props.photos.title} - {props.photos.date}
      </h3>
      <p>{props.photos.explanation}</p>
    </div>
  );
};

export default Photos;
