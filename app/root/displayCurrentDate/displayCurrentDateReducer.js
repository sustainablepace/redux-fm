export default (state = {date:null}, domainEvent) => {
  if(domainEvent && domainEvent.type === 'DATE_CHANGED') {
    return Object.assign({}, state, {date: domainEvent.date})
  }
  return Object.assign({}, state)
}
