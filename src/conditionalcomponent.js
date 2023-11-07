import React, { Component } from "react";
class Car extends Component {
  constructor() {
    super();
    // initializing the state properity
    this.state = {
      displayData: false,
    };
    this.toggleButton = this.toggleButton.bind(this);
  }
  toggleButton() {
    this.setState({ displayData: !this.state.displayData });
  }
  render() {
    // declaring the const variable bio and checking the conditional statement

    // return statement
    return (
      <div>
        <h2> Nissan Car Info </h2>
        <p>
          This holiday season, get ready to unwrap the greatest gift, the
          savings at the Nissan Thrill of the Drive Sales Event! Starring the
          heart-pumping Nissan lineup. Better hurry, these offers won’t be back
          in stock.
        </p>
        {this.state.displayData ? (
          <div>
            <p>
              Avoid a sales event rush at your local Nissan dealership, try
              doing your vehicle research ahead of time. You can even request a
              quote before visiting your dealership. Did you know you may be
              able to arrange a test drive online from a participating
              DRIVE@HOME dealer, that starts right outside your door? This is a
              time-saving tip, giving you more time to test drive a Nissan
              vehicle
            </p>
            <button onClick={this.toggleButton} className="btn btn-warning">
              Show Less
            </button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleButton} className="btn btn-secondary">
              Read More
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Car;
