import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "GDG Lead @ SSIPMT Raipur",
          "AI & Full-Stack Developer",
          "Backend Systems Specialist",
          "Computer Science Undergraduate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
// Typewriter loop setting
