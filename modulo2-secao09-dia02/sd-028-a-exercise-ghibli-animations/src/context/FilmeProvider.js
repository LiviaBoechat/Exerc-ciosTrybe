import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FilmsContext from './FilmsContext';

export default function FilmeProvider({ children }) {
  const [filmList, setFilm] = useState([]);
  const [favoriteList, setToFavorite] = useState([]);

  const values = {
    filmList,
    favoriteList,
    setToFavorite,
  };

  useEffect(() => {
    async function fetchFilms() {
      const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
      const data = await response.json();
      setFilm(data);
    }
    fetchFilms();
  }, []);

  return (
    <FilmsContext.Provider value={ values }>
      {filmList.length ? children : 'Loading...'}
    </FilmsContext.Provider>
  );
}

FilmeProvider.propTypes = {
  children: PropTypes.shape({
  }).isRequired,
};
