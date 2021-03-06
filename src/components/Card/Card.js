import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCards } from '../../store/actions/cards'
import { cardsFilterSelector, isCardsReadySelector } from '../../store/selectors/cards'
import useStyles from './Card.styles'

const Card = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const cards = useSelector(state => cardsFilterSelector(state))
  const isReady = useSelector(state => isCardsReadySelector(state))

  useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  return (
    <div className={classes.box}>
      {
        isReady ?
          cards.map((item) => (
            <div className={classes.item} key={item.id}>
              <div className={classes.blockTop}>
                <div className={classes.blockTopCheck}>
                  <h6 className={classes.title}>{item.title}</h6>
                  <div className={classes.checkboxBox}>
                    <input type="checkbox" id={`checkbox${item.id}`} />
                    <label htmlFor={`checkbox${item.id}`}></label>
                  </div>
                </div>
                <div className={classes.price}>{item.price} руб.</div>
                <div className={classes.infoCompany}>
                  <div>{item.company}</div>
                  <div className={classes.inn}>ИНН {item.inn}</div>
                </div>
              </div>
              <div className={classes.blockBottom}>
                <div className={classes.request}>
                  <span>{item.requestNumber}</span>
                  <span>от {item.date}</span>
                </div>
              </div>
              <div className={classes.hoverBlock}>
                <div className={classes.tagsBox}>
                  <div>{item.tagExecution}</div>
                  <div>{item.tagRequestn}</div>
                  <div>{item.tagStatus}</div>
                </div>
                <div className={classes.name}>
                  <span>{item.name}</span>
                </div>
                <div>
                  <div className={classes.tagsBox}>
                    <div>{item.tagSome}</div>
                  </div>
                  <div className={classes.request}>
                    <span>{item.requestNumber}</span>
                    <span>от {item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          )) : <div className={classes.loading}>Загрузка...</div>
      }
    </div>

  )
}

export default Card