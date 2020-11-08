import React, { useEffect, useRef, useState } from "react";
// note that i used useRef here ( ps: if you want to use portals intead ,you can do it );
function Dom() {
  const textRef = useRef(null);
  const string =
    "hello every body , this is a simple  simulate typing in react.js !! ";
  let [newText, setNewText] = useState("");
  let index = 0;

  // this is the function which display the new text from const string
  const displayString = () => {
    setNewText(string.slice(0, index));
    index++;
    if (index > string.length) {
      index = 0;
    }
  };
  // fonction which use Math.floor and Math.random to give a random number that will be use
  //in the setInterval parameter ;) :
  const randomSpeed = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // use effect is useful here to set the setInterval and rendering our function just once :
  useEffect(() => {
    textRef.current = setInterval(displayString, randomSpeed(90, 500));
    console.log(textRef.current);
    return () => {
      clearInterval(textRef);
    };
  }, []);
  return (
    <div>
      <p ref={textRef} className="text">
        {" "}
        {newText}{" "}
      </p>
      <button onClick={() => clearInterval(textRef.current)}>
        {" "}
        clear text
      </button>
    </div>
  );
}
export default Dom;
