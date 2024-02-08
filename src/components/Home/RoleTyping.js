import React from "react";
import Typewriter from "typewriter-effect";

function RoleTyping() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Web Developer",
          "Full Stack Developer",
          "Backend Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default RoleTyping;
