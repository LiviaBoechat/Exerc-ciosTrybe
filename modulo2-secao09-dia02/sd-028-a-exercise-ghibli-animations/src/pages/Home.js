import React, { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';

export default function Home() {
  const { filmList, favoriteList, setToFavorite } = useContext(FilmsContext);

  const handleClick = (eachFilm) => {
    const filterStillFavorites = favoriteList.filter((eachFavorite) => (
      eachFavorite.id !== eachFilm.id
    ));

    if (favoriteList.find((eachFavorite) => eachFavorite.id === eachFilm.id)) {
      setToFavorite(filterStillFavorites);
      // localStorage.setItem('favoriteList', JSON.stringify(filterStillFavorites));
    } else {
      setToFavorite([...favoriteList, eachFilm]);
      // localStorage.setItem('favoriteList', JSON.stringify([...favoriteList, eachFilm]));
    }
  };

  return (
    <div>
      <h2>Films</h2>
      { filmList.map((eachFilm) => (
        <figure key={ eachFilm.id }>
          <img
            src={ eachFilm.image }
            alt={ eachFilm.title }
          />
          <figcaption>
            <h2>{ eachFilm.title }</h2>
            <p>{ eachFilm.description }</p>
          </figcaption>
          <button
            type="button"
            onClick={ () => handleClick(eachFilm) }
          >
            { favoriteList.find((eachFavorite) => eachFavorite.id === eachFilm.id)
              ? 'Desfavoritar' : 'Favoritar' }
          </button>
        </figure>

      ))}
    </div>
  );
}
