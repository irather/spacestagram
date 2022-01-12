import React from "react";

const Photos = (props) => (
  <div>
    <h3>{props.photos.title}</h3>
    <img src={props.photos.url} alt={props.photos.title} />
    <p>{props.photos.explanation}</p>
  </div>
);

export default Photos;
