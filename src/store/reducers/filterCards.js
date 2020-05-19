import types from '../constants/filterCards'

const initialState = {
  requestNumber: '',
  company: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FIND_CARD_REQUEST_NUMBER:
      {
        return {
          ...state,
          requestNumber: action.payload
        }
      }
    case types.FIND_CARD_COMPANY:
      {
        return {
          ...state,
          company: action.payload
        }
      }
    default:
      return state
  }
}