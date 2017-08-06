import Moment from 'moment'

export default (state = {date:'1963-W28-1'}, domainEvent) => {
  const date = Moment(state.date);
  if(domainEvent && domainEvent.type === 'NEXT_DAY') {
      date.add(1, 'd');
  }
  return Object.assign({}, state, {date: date.format('YYYY') + '-W' + date.format('W-E')})
}
