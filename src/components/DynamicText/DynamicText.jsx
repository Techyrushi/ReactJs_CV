"use client"; // Ensures this is treated as a Client Component

import React from "react";
import { ReactTyped } from "react-typed";

const DynamicText = () => {
  return (
    <div className="text-2xl">
      <h1 className="text-yellow-600 font-bold text-5xl flex items-center">
        <span role="img" aria-label="wave emoji" style={{ marginRight: "10px", animation: "wave 2s infinite" }}>👋</span>
        <span>
          Hii...
          <br />
          <span className="text-yellow-300 font-bold text-4xl">I am Rushikesh</span>
        </span>
      </h1>
      {/* Adjust size and spacing as needed */}
     <div className="text-yellow-100">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ReactTyped
          strings={[
            "Experienced Backend Developer...!",
            "Skilled in JavaScript and NodeJS <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development.",
            "Proficient in PHP, Laravel <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL, MongoDB.",
            "Over One Year of Proven Experience.",
            "Passionate About Creating Efficient <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scalable Solutions.",
            "Open to Associate & Software <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Development Engineer (SDE) Roles.",
            "Let's Build Something Amazing Together...",
          ]}
          typeSpeed={50} // Speed at which the text is typed
          backSpeed={20} // Speed at which the text is erased
          backDelay={1500} // Delay before starting to erase
          loop // Keeps typing in a loop
        />
      </div>
    </div>
  );
};

export default DynamicText;
