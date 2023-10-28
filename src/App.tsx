import React from 'react'
import { createRoot } from 'react-dom'

const App = () =>
  React.createElement("main", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(
      Pet,
      { name: "Godsay", animal: "Dog", breed: "Unknown" },
      "First Child",
    ),
    React.createElement(
      Pet,
      { name: "Dash", animal: "Cat", breed: "Cute & Crude" },
      "Second Child",
    ),
    React.createElement(
      Pet,
      { name: "Doink", animal: "Lizard", breed: "Lizard" },
      "Third Child",
    ),
  ]);
const Pet = (props) => {
  console.log("pet", { props });
  const { name, animal, breed } = props;
  return React.createElement("section", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};
const container = document.querySelector("#root");
const root = createRoot(container);
const AppElement = React.createElement(App, {}, null);
root.render(AppElement);

