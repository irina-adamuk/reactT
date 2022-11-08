import React,  { Component } from 'react';

export class Button extends Component {
  constructor(props) {
    super(props)
    this.interval = null
  }
  componentDidMount(){
    // this.interval = setInterval(() => {
    //   console.log(1)
    // },1000)
    console.log("Button did Mount!")
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps>>>>",nextProps, "nextState>>>>>",nextState);
    if(nextProps.name !== this.props.name) {
      return true;
    }
    return false;
  }
  componentWillUnmount(){
    // clearInterval(this.interval);
    console.log("Button will UnMount!")
  }
  render() {
    return <button onClick={this.props.click}>{this.props.name}</button>
  }
}