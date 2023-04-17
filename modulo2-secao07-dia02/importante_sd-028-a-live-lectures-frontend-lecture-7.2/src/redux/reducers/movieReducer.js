import categories from '../../data';
import { SELECT_MOVIE } from '../actions';

const INITIAL_STATE = {
  categories,
  selectedMovie: categories[0].movies[0],
  selectedCategory: categories[0].name,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SELECT_MOVIE: {
    return {
      ...state,
      selectedCategory: action.payload.selectedCategory,
      selectedMovie: action.payload.selectedMovie,
    };
  }
  default: return state;
  }
};

export default movieReducer;
