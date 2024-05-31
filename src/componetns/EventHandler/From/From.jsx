import React from "react";

const Fromss = () => {
  return (
    <form>
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            alert("Enter key pressed!");
          }
        }}
      />
      <button>Submit</button>
    </form>
  );
};

const Froms = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" />
      <button>Submit</button>
    </form>
  );
};

export { Froms, Fromss };
