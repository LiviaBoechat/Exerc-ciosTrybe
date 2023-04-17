const SELECT_MOVIE = 'SELECT_MOVIE';

const selectMovie = (selectedMovie, selectedCategory) => ({
  type: SELECT_MOVIE,
  payload: {
    selectedMovie,
    selectedCategory,
  },
});

export { selectMovie, SELECT_MOVIE };
