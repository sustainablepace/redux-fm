import {connect} from 'react-redux';
import React from 'react';

/* Presentational Component */
class CalendarComponent extends React.Component {
    todaysFixtures() {
        return this.props.fixtures.filter((fixture) => {
            return this.props.date === fixture.date
        })
    }

    render() {
        const fixtures = this.todaysFixtures().map(
            (fixture, i) => <li key={fixture.date + '-' + i}>{fixture.fixture[0].name} - {fixture.fixture[1].name}</li>
        );
        return <ul>
            {fixtures}
        </ul>
    }
}

/* Container Component */
export default connect(
    (state, ownProps) => {
        return state.calendar
    },
    null
)(CalendarComponent);
