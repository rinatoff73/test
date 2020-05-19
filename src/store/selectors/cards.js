import { requestNumberSelector, companySelector } from './filterCards'

const getCardsSelector = state => state.cards

const isCardsReadySelector = state => getCardsSelector(state).isReady
const cardsItemSelector = state => getCardsSelector(state).item
const cardsFilterSelector = state => {
  return cardsItemSelector(state) && cardsItemSelector(state)
    .filter(card =>
      card.requestNumber
        .includes(requestNumberSelector(state)) &&
      card.company.toLowerCase()
        .includes(companySelector(state).toLowerCase())
    )
}

export {
  cardsFilterSelector,
  isCardsReadySelector
}