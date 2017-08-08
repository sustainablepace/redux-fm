export default (state = { fixtures: [], date: null }, domainEvent) => {
    if(domainEvent && domainEvent.type === 'FIXTURE_SCHEDULED') {
        const event = Object.assign({}, domainEvent);
        delete event.type;
        return Object.assign({}, state, {fixtures: [...state.fixtures, event]})
    }
    if(domainEvent && domainEvent.type === 'MATCH_FINISHED') {
        const event = Object.assign({}, domainEvent);
        delete event.type;
        const copyOfFixtures = state.fixtures.slice(0).map(function(fixture) {
           if(fixture.fixture[0].name === event.fixture[0].name && fixture.fixture[1].name === event.fixture[1].name) {
               console.log("!");
               return event;
           }
           return fixture;
        });
        return Object.assign({}, state, {fixtures: copyOfFixtures})
    }
    if(domainEvent && domainEvent.type === 'DATE_CHANGED') {
        return Object.assign({}, state, {date: domainEvent.date})
    }
    return Object.assign({}, state)
}