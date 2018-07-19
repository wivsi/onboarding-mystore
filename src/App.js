import React, { Component } from 'react';
import './assets/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import ErrorPath from './components/ErrorPath';

class App extends Component {
  state  = {
    contact: {}
  };

  getData = contact => {

  }


  /* 
      - Define a callback in parent component which takes the data I need in as a parameter.
      - Pass that callback as a prop to the child.
      - Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), and pass in the data as the argument.
  */

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/" component={Stage1} exact/>
            <Route path="/Stage2" component={Stage2}/>
            <Route component={ErrorPath}/> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
