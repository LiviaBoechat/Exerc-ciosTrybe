import { SUBMIT_PROFESSIONAL_INFO } from '../actions';

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_PROFESSIONAL_INFO:
    return {
      ...state,
      ...action.payload,
    };

  default: return state;
  }
};

export default professionalReducer;
