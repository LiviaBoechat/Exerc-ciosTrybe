const INITIAL_STATE = {
  user: 'luanderson',
  email: 'luanderson@betrybe.com',
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log('Estou ouvindo as actions: ', action.type);
  return state;
};

export default userReducer;
