import { ACTIVE_STORIE, DEACTIVATE_STORIE } from '../actions/storie-actions';

const activestorie = localStorage.getItem("activestorie")

export const createStorieReducer = (activeStorie) => {
  const initialState = activestorie
      ? activeStorie = activestorie
      : activeStorie = null

  return function storieReducer(state = initialState, action) {
    switch (action.type) {
      case ACTIVE_STORIE:
        return {
          ...state,
          activeStorie : action.payload,
        };
      case DEACTIVATE_STORIE:
        return {
          ...state,
          activeStorie: undefined,
        };
      default:
        return state;
    }
  };
};
