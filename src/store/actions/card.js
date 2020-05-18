import axios from 'axios'
import types from '../constants/card';

const getCardSuccess = data => ({
  type: types.GET_CARD_SUCCESS,
  payload: data
});

const getCardFail = error => ({
  type: types.GET_CARD_FAIL,
  payload: error
});

export const fetchCard = () => {
  return async dispatch => {
    try {
      const res = await axios.get('http://www.mocky.io/v2/5ec246402f0000a97dc350d0')
      const { data } = res;
      dispatch(getCardSuccess(data));
    } catch (error) {
      dispatch(getCardFail(error));
    }
  };
};