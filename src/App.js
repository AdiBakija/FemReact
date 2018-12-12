const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title.");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Rocky",
        animal: "Parrot",
        breed: "Green cheeked conure"
      }),
      React.createElement(Pet, {
        name: "Kiki",
        animal: "Parrot",
        breed: "Budgie"
      }),
      React.createElement(Pet, {
        name: "Riki",
        animal: "Parrot",
        breed: "Cockatiel"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
