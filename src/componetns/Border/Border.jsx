import React from "react";

const Border = ({ children }) => {
  const borderStyle = {
    border: "2px solid black",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "20px"
  };
  return (
    <div>
      <div style={borderStyle}>{children}</div>
    </div>
  );
};

export default Border;
