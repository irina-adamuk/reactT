import React, { Component } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export class Form extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {

  //   }
  // }
  state = {
    name: "click",
    value: "",
    messages: [],
    visible: true,
  };
  handleClick = () => {
    this.setState({ messages: [...this.state.messages, this.state.value] });
    this.setState({ value: "" });
    console.log(this.state.messages);
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  componentDidMount() {
    console.log("ClsssForm did mount!");
  }
  componentDidUpdate() {
    console.log('ClassForm did update!')
  }
  render() {
    return (
      <>
        {this.state.visible && (
          <ul>
            {this.state.messages.map((message) => (
              <li>{message}</li>
            ))}
          </ul>
        )}
        
          <Input change={this.handleChange} value={this.state.value} />
          <Button name={this.state.name} click={this.handleClick} />

        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          {this.state.visible ? "hide" : "show"}
        </button>
      </>
    );
  }
}
