export default (state = { fixtures: [], date: null }, domainEvent) => {
    if(domainEvent && domainEvent.type === 'FIXTURE_SCHEDULED') {
        const event = Object.assign({}, domainEvent);
        delete event.type;
        return Object.assign({}, state, {fixtures: [...state.fixtures, event]})
    }
    if(domainEvent && domainEvent.type === 'DATE_CHANGED') {
        return Object.assign({}, state, {date: domainEvent.date})
    }
    return Object.assign({}, state)
}