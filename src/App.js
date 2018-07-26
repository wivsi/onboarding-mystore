import React, { Component } from 'react';
import './assets/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';
import ErrorPath from './components/ErrorPath';

// Make new context
const MyContext = React.createContext();

// Create a provider component
class myProvider extends Component{
  state = {
    email: 'test@test.no',
    phone: '00000000'
  }
  render (){
    return(
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

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
        <div className="page">
          <div className="container">
            <Switch>
              <Route path="/" component={Stage1} exact/>
              <Route path="/Stage2" component={Stage2}/>
              <Route path="/Stage3" component={Stage3}/>
              <Route component={ErrorPath}/> 
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
