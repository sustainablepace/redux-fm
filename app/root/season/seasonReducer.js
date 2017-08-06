import Moment from 'moment'

export default (state = {teams:[], ready:false, year:null}, domainEvent) => {
  if(domainEvent && domainEvent.type === 'TEAM_CREATED') {
    return Object.assign({}, state, {teams: [domainEvent.team, ...state.teams]})
  }
  if(domainEvent && domainEvent.type === 'DATE_CHANGED') {
    if(Moment(domainEvent.date).format('W-E') === '28-1') {
      return Object.assign({}, state, {
        ready: true,
        year: parseInt(Moment(domainEvent.date).format('YYYY'), 10)
      })
    }
  }
  return Object.assign({}, state)
}
