import React from 'react'
import { useDispatch } from 'react-redux'
import { onFindCardsRequestNumber, onFindCardsCompany } from '../../store/actions/filterCards'
import useStyles from './CardSearch.styles'
import searchImg from '../../assets/images/search.png'

const CardSearch = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const findRequestNumber = e => {
    dispatch(onFindCardsRequestNumber(e.target.value))
  }

  const findCardCompany = e => {
    dispatch(onFindCardsCompany(e.target.value))
  }

  return (
    <div className={classes.search}>
      <div className={classes.request}>
        <input type="number"
          placeholder="Номер заявки"
          onChange={findRequestNumber}
        />
        <img src={searchImg} alt="search" />
      </div>
      <div className={classes.client}>
        <input
          type="text"
          placeholder="Наименование клиента"
          onChange={findCardCompany}
        />
        <img src={searchImg} alt="search" />
      </div>
    </div>
  )
}

export default CardSearch
