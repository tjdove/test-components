import { Component } from "react";

export default class ClassComponent extends Component {
  state = {
    ufoCount: "3",
  };

  componentDidMount() {
    console.log("Class Component Mounted");
  }

  handleChange = () => {
    this.setState({ ufoCount: 9 });
    //this.setState((prevUfoCount) => ({ ufoCount: prevUfoCount + 22 })); // or
    console.log("handleChange: " + this.state.ufoCount);
  };

  render() {
    return (
      <div>
        Class Component: UFO Type: {this.state.ufoCount}
        <button onClick={this.handleChange}>Change</button>
      </div>
    );
  }
}
