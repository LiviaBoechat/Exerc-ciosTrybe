import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Login from './components/Login';
import StrictAccess from './StrictAcess';

class Routes extends Component {
  render() {

    const { userName, password, readInput } = this.props

    return(
      <>
        <Switch>
          <Route path="/users/:id" render={ (props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route
            path="/strict-access"
            render={ () => (
              <StrictAccess userData={ { username: { userName }, password: { password } } } />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/Home" component={Home} />
          <Route path="/" render={ (props) => <Login {...props}  lalalala={readInput} /> } />
        </Switch>
        
      </>
    )
  }
}

export default Routes;