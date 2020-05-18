import types from '../constants/filterCard'

export const onFindCardRequestNumber = num => ({
  type: types.FIND_CARD_REQUEST_NUMBER,
  payload: num
})

export const onFindCardCompany = value => ({
  type: types.FIND_CARD_COMPANY,
  payload: value
})
