import React, { Component } from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    userName: '',
    password: '', 
  }

  handleChange ({ target }) => {
    
  }

  render() {

    const { userName , password } = this.state;

    return ( 
      <>
        <Routes 
          userName={ userName }
          password={ password }
          readInput= { this.handleChange }

        />
        <nav>
          <ul>
            <li><Link to={"/Home"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/users/1"}>Users</Link></li>
            <li><Link to={"/strict-access"}>Strict Access</Link></li>
          </ul>
        </nav>
       
      
        
      </> 
    );
  }
}

export default App;