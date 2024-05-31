import React from "react";
import "./event.css";
import {Froms, Fromss} from "./From/From";

const Event = () => {
  const handleMouseOver = (e) => {
    e.target.classList.add("large");
  };

  const handleMouseOut = (e) => {
    e.target.classList.remove("large");
  };

  const handleDoubleClick = () => {
    alert("Button was double-clicked!");
  };

  const handleClick = () => {
    console.log("Button was clicked!");
  };

  const handleFocus = () => {
    console.log("Focused on the textbox");
  };

  const handleBlur = () => {
    console.log("Out of textbox");
  };

  const handleCopy = () => {
    alert("Content copied");
  };

  const handleCut = () => {
    alert("Content cut");
  };

  const handlePaste = () => {
    alert("Content pasted");
  };

  return (
    <div className="container">
      <img
        src={`https://picsum.photos/id/${1}/100/100`}
        alt="Placeholder"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="normal"
      />
      <button onDoubleClick={handleDoubleClick} onClick={handleClick}>
        Click Me
      </button>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
      <p
        onCopy={() => {
          alert("content copieds");
        }}
        onCut={handleCut}
        onPaste={handlePaste}
      >
        Try copying, cutting, or pasting this text.
      </p>
      <Froms />
      <Fromss />
    </div>
  );
};

export default Event;
