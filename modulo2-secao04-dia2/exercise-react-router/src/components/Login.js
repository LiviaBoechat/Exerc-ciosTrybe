import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    const { lalalala } = this.props;

    return (
      <>
        <input 
          onChange={ lalalala }
        />
      </>
    )
  }
}

export default Login;