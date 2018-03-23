import React, { Component } from 'react';
import {createStore} from 'redux';

class ReduxDemo extends Component {
  render() {
    //step 2 Reducer : state n action
    const reducer = function(state, action){
      if(action.type === 'ATTACK')
        return action.payload;
      if(action.type === 'GREENATTACK')
        return action.payload;
      return state;
    };

    //step 1 Create Store : reducer n state
    const store = createStore(reducer, 'Peace');

    //step 3 subscribe
    store.subscribe(() => {
      console.log("Store is now", store.getState());
    });

    //step 4 Dispatch action
    store.dispatch({type : 'ATTACK', payload: 'Iron man'});
    store.dispatch({type : 'GREENATTACK', payload: 'HULK'});

    return (
      <div className="redux">
        TEST
      </div>
    );
  }
}

export default ReduxDemo;
