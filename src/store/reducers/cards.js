import types from '../constants/cards'

const initialState = {
  item: null,
  error: null,
  isReady: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARDS_SUCCESS:
      {
        return {
          ...state,
          item: action.payload,
          isReady: true
        };
      }
    case types.GET_CARDS_FAIL:
      {
        return {
          ...state,
          error: action.payload,
        }
      }
    default:
      return state
  }
}