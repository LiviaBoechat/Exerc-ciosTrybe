import React, { useContext } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import AppContext from '../context/AppContext';

function Header() {
  const { setIsDarkTheme, isDarkTheme } = useContext(AppContext);

  return (
    <header>
      <div
        className="theme"
        onClick={ () => setIsDarkTheme((prevTheme) => !prevTheme) }
        role="presentation"
      >
        { isDarkTheme
          ? <BsSunFill style={ { color: 'yellow' } } />
          : <BsMoonFill />}
      </div>
    </header>
  );
}

export default Header;
