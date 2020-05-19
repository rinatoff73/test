const getCardsFilterSelector = state => state.filterCards

const requestNumberSelector = state => getCardsFilterSelector(state).requestNumber
const companySelector = state => getCardsFilterSelector(state).company

export {
  requestNumberSelector,
  companySelector
}