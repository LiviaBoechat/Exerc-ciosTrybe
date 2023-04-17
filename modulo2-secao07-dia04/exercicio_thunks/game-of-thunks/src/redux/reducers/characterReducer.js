import { SEARCH_BEGIN } from '../actions';
import { SEARCH_SUCCESS } from '../actions';
import { SEARCH_ERROR} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  character: '',
  error: '',
};


function characterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: action.character[0],
      }
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default characterReducer;