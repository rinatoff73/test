import React from 'react'
import { useDispatch } from 'react-redux'
import { onFindCardRequestNumber, onFindCardCompany } from '../../store/actions/filterCard'
import useStyles from './CardSearch.styles'
import searchImg from '../../assets/images/search.png';

const CardSearch = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const findRequestNumber = num => {
    dispatch(onFindCardRequestNumber(num))
  }

  const findCardCompany = value => {
    dispatch(onFindCardCompany(value))
  }

  return (
    <div className={classes.search}>
      <div className={classes.request}>
        <input type="number"
          placeholder="Номер заявки"
          onChange={e => findRequestNumber(e.target.value)}
        />
        <img src={searchImg} alt="search" />
      </div>
      <div className={classes.client}>
        <input
          type="text"
          placeholder="Наименование клиента"
          onChange={e => findCardCompany(e.target.value)}
        />
        <img src={searchImg} alt="search" />
      </div>
    </div>
  )
}

export default CardSearch
