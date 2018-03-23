import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Results from './components/Results';
import './index.css';
import App from './App';
import reducer from './reducers';
const store = createStore(reducer);
//import registerServiceWorker from './registerServiceWorker';
function render(){
  ReactDOM.render(<div className="container"><App store={store} /> <hr /> <Results store={store} /></div>, document.getElementById('root'));
}
//registerServiceWorker();
store.subscribe(render);
render();
