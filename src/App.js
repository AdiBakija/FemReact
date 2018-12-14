import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Rocky" animal="Parrot" breed="Green cheeked conure" />
        <Pet name="Kiki" animal="Parrot" breed="Budgie" />
        <Pet name="Riki" animal="Parrot" breed="Cockatiel" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
