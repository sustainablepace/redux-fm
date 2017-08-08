export default (state = {}, domainEvent) => {
  if(domainEvent && domainEvent.type === 'SEASON_READY') {
    const event = Object.assign({}, domainEvent)
    delete event.type;
    return Object.assign({}, state, event)
  }
  return Object.assign({}, state)
}
