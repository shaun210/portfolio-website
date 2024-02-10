import React, { Component } from "react";
import Lottie from "lottie-react";

export default class DisplayLottie extends Component {
  render() {
    const { animationData, width, height } = this.props; // Destructure animationData, width, and height props

    if (!animationData) {
      return null; // Return null if animationData is not provided
    }

    return (
      <div style={{ width: width, height: height }}>
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }} // Ensure Lottie fills its container
        />
      </div>
    );
  }
}
