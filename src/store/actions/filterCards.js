import types from '../constants/filterCards'

export const onFindCardsRequestNumber = num => ({
  type: types.FIND_CARDS_REQUEST_NUMBER,
  payload: num
})

export const onFindCardsCompany = value => ({
  type: types.FIND_CARDS_COMPANY,
  payload: value
})
