"use client"; // Ensures this is treated as a Client Component

import React from "react";
import { ReactTyped } from "react-typed";

const DynamicText = () => {
  return (
    <div className="text-2xl">
      <h1 className="flex items-center text-5xl font-bold text-yellow-600">
        <span>
          Hii...
          <br />
          <span className="text-4xl font-bold text-yellow-300">I am Rushikesh</span>
        </span>
      </h1>
      {/* Adjust size and spacing as needed */}
     <div className="text-yellow-100">
     <ReactTyped
          strings={[
            "Experienced Backend Developer...!",
            "Skilled in JavaScript and NodeJS.",
            "Proficient in PHP, Laravel, MySQL, MongoDB.",
            "Over One Year of Proven Experience.",
            "Passionate About Creating Efficient and Scalable Solutions.",
            "Open to Associate and SDE Roles.",
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
