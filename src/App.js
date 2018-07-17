import React, { Component } from 'react';
import './assets/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import ErrorPath from './components/ErrorPath';

class App extends Component {
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
