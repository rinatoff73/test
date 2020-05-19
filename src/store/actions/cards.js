import axios from 'axios'
import types from '../constants/cards'

const getCardsSuccess = data => ({
  type: types.GET_CARDS_SUCCESS,
  payload: data
})

const getCardsFail = error => ({
  type: types.GET_CARDS_FAIL,
  payload: error
})

export const fetchCards = () => {
  return async dispatch => {
    try {
      const res = await axios.get('http://www.mocky.io/v2/5ec246402f0000a97dc350d0')
      dispatch(getCardsSuccess(res.data))
    } catch (error) {
      dispatch(getCardsFail(error))
    }
  }
}