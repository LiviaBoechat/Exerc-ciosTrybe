import React, { Component } from 'react';
import Coordinates from './Coordinates';

class Header extends Component {
  render() {
    const latitude = -21.1767;
    const longitude = -47.8208;

    return (
      <header>
        <h1>
          Space Station
          {' '}
          <span className="purple-font">Tracker</span>
        </h1>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </header>
    );
  }
}

export default Header;
