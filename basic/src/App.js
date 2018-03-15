import React, { Component } from 'react';
import Users from './Components/Users'
import $ from 'jquery';
import './App.css';

class App extends Component {
  
  constructor(){
	  super();	 
	  this.state = {
		  users: []
	  };
  }
  
  componentDidMount(){
	  $.ajax({
		url: 'https://jsonplaceholder.typicode.com/users',
		dataType: 'json',
		success: function(data){
		   this.setState({
			   users: data
		   }, function(){
			   console.log(this.state.users);
		   });	
		}.bind(this)
	  });
  }
  
  
  render() {
    return (
      <div className="Users">
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
