const SEARCH_BEGIN = 'SEARCH_BEGIN';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const  SEARCH_ERROR = 'SEARCH_ERROR';


export const searchBegin = () => ({
  type:  SEARCH_BEGIN, 
});

export const searchSuccess = (character) => ({
  type: SEARCH_SUCCESS,
  payload: character,
});

export const searchFailure = (error) => ({
  type: SEARCH_ERROR,
  payload: error,
});

export function thunkCharacter(name) {
  return async (dispatch) => {
    try {
      dispatch(searchBegin());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data = await response.json();
      dispatch(searchSuccess(data))
    } catch (error) {
      dispatch(searchFailure(error))
    }
  };
};