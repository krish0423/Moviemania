import React from "react";
import "./playButton.css";

function PlayButton({ movie }) {
  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-ceneter ${
          movie.active ? "active" : ""
        }`}
      >
        <a href="#" className="playBtn">
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
    </>
  );
}

export default PlayButton;
