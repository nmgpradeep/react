import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  
  render() {
	 let user= this.props.users.map(user => {
	    return (
	       <User user={user} key={user.id} />
	    );	 
	 });	  
	  
    return (
      <ul>
        <h3>USER Data </h3>
        {user}
      </ul>
    );
  }
}

export default Users;
