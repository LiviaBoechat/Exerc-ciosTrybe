import React, { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';

export default function Favorites() {
  const { favoriteList, setToFavorite } = useContext(FilmsContext);
  console.log(favoriteList);

  // useEffect(() => {
  //   // Retrieve favoriteList from localStorage
  //   const savedFavoriteList = JSON.parse(localStorage.getItem('favoriteList'));
  //   if (savedFavoriteList) {
  //     setToFavorite(savedFavoriteList);
  //   }
  // }, [setToFavorite]);

  const handleClick = (eachFavorite) => {
    const filterStillFavorites = favoriteList.filter((favorite) => (
      favorite.id !== eachFavorite.id
    ));
    setToFavorite(filterStillFavorites);
    // localStorage.setItem('favoriteList', JSON.stringify(filterStillFavorites));
  };

  return (
    <div>
      <h1>Favorites</h1>
      { favoriteList.map((eachFavorite) => (
        <figure key={ eachFavorite.id }>
          <img
            src={ eachFavorite.image }
            alt={ eachFavorite.title }
          />
          <figcaption>
            <h2>{ eachFavorite.title }</h2>
            <p>{ eachFavorite.description }</p>
          </figcaption>
          <button
            onClick={ () => handleClick(eachFavorite) }
          >
            Desfavoritar
          </button>
        </figure>

      ))}
    </div>
  );
}
