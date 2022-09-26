import React from "react";
import gif from "../assets/gif.gif";

const Loading = () => {
  return (
    <div className="loader">
      <h2 className="loader__title">Getting the weather near you . . .</h2>
      <img className="loader__gif" src={gif} alt="" />
      <div className="loader__dots">
        <div className="dot-loader"></div>
        <div className="dot-loader dot-loader--2"></div>
        <div className="dot-loader dot-loader--3"></div>
      </div>
    </div>
  );
};

export default Loading;
