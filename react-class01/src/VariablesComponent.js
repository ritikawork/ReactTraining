import React from "react";

const welcome = {
  greeting: "Hey",
  title: "React",
};
let getTitle = (str) => {
  return str;
};
export default function VariablesComponent() {
  return (
    <div>
      <h1>
        {welcome.greeting} {getTitle("React")}
      </h1>
      <label>Search:</label>
      <input id="search" type="text"></input>
      <button id="search" type="submit">
        Submit
      </button>
    </div>
  );
}
