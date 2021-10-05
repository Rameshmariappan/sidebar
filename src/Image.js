import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ id, author, download_url }) => {
  return (
    <div className="image">
      <LazyLoadImage
        id={id}
        src={download_url}
        alt={author}
        width="500px"
        height="400px"
      />
      <div className="author">
        <h3>{author}</h3>
      </div>
    </div>
  );
};

export default Image;
