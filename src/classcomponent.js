import React from "react";

class Car extends React.Component {
  constructor() {
    super();
    this.state = { carColor: "green" };
  }
  render() {
    const bio =
      this.state.carColor == "red" ? (
        <div> {this.state.carColor} </div>
      ) : (
        "yellow"
      );
    return (
      <div>
        <h1> Im a {bio} </h1>
      </div>
    );
  }
}
export default Car;
