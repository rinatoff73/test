import types from '../constants/card';

const initialState = {
  item: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARD_SUCCESS:
      {
        return {
          ...state,
          item: action.payload,
        };
      }
    case types.GET_CARD_FAIL:
      {
        return {
          ...state,
          error: action.payload,
        }
      }
    default:
      return state;
  }
}