import React, { Component } from 'react';
class Clock extends Component {
  constructor(){
    super();
    this.state = {
      date: (new Date())
    }
  }
  tick(){
    this.setState({
      date: (new Date())
    });
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h3>Hello World!</h3>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
