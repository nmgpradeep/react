import React, { Component } from 'react';
import {voteAngular, voteReact, voteVuejs} from './actions';
//import ReduxDemo from './ReduxDemo';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div>
        <div className="jambotron" style={{'textAlign': 'center'}}>
          <h2>What is your favorite front-end framework in 2017</h2>
          <h4>Click on the logo below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <span onClick={this.handleVoteAngular}>Angular </span>
            </div>
            <div className="col-xs-2">
              <span onClick={this.handleVoteReact}>React </span>
            </div>
            <div className="col-xs-2">
              <span onClick={this.handleVoteVuejs}>Vuejs </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
