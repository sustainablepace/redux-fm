import {connect} from 'react-redux';
import React from 'react';
import Moment from 'moment'

/* Presentational Component */
class SchedulerComponent extends React.Component {
    componentDidUpdate() {
        this.props.scheduleFixtures(this.props)
    };

    render() {
        return null
    }
}

/* Container Component */
export default connect(
    (state, ownProps) => {
        return state.scheduler
    },
    (dispatch) => {
        const createFixtures = (teams) => {
            const pool = [];
            const rounds = [];
            for (let i = 0; i < teams.length; i++) {
                pool.push(i);
            }
            for (let j = 0; j < teams.length - 1; j++) {
                const roundFirstHalf = [];
                const roundSecondHalf = [];
                for (let k = 0; k < teams.length / 2; k++) {
                    const home = pool[k];
                    const away = pool[teams.length - k - 1];
                    roundFirstHalf.push([teams[home], teams[away]]);
                    roundSecondHalf.push([teams[away], teams[home]]);
                }
                rounds[j] = roundFirstHalf;
                rounds[j + teams.length - 1] = roundSecondHalf;

                // See http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm
                const pivot = pool.shift();
                const first = pool.shift();
                pool.push(first);
                pool.unshift(pivot);
            }
            const fixtures = [];
            for (let i in rounds) {
                fixtures.push(rounds[i]);
            }
            return fixtures
        };

        const createCalendar = (year) => {
            return [
                ( year ) + "-W31-6",
                ( year ) + "-W33-6",
                ( year ) + "-W34-6",
                ( year ) + "-W35-6",
                ( year ) + "-W37-6",
                ( year ) + "-W38-6",
                ( year ) + "-W39-3",
                ( year ) + "-W39-6",
                ( year ) + "-W40-6",
                ( year ) + "-W42-6",
                ( year ) + "-W43-6",
                ( year ) + "-W44-6",
                ( year ) + "-W45-6",
                ( year ) + "-W47-6",
                ( year ) + "-W48-6",
                ( year ) + "-W49-6",
                ( year ) + "-W50-6",
                ( year + 1 ) + "-W4-6",
                ( year + 1 ) + "-W5-6",
                ( year + 1 ) + "-W6-6",
                ( year + 1 ) + "-W7-6",
                ( year + 1 ) + "-W8-6",
                ( year + 1 ) + "-W9-6",
                ( year + 1 ) + "-W10-3",
                ( year + 1 ) + "-W10-6",
                ( year + 1 ) + "-W11-6",
                ( year + 1 ) + "-W12-6",
                ( year + 1 ) + "-W14-6",
                ( year + 1 ) + "-W15-6",
                ( year + 1 ) + "-W16-6",
                ( year + 1 ) + "-W17-6",
                ( year + 1 ) + "-W18-6",
                ( year + 1 ) + "-W19-6",
                ( year + 1 ) + "-W20-6"
            ];
        };

        return {
            scheduleFixtures: (props) => {
                const fixtures = createFixtures(props.teams);
                const calendar = createCalendar(props.year);
                for (let i in fixtures) {
                    for (let j in fixtures[i]) {
                        dispatch({
                            type: 'FIXTURE_SCHEDULED',
                            fixture: fixtures[i][j],
                            matchday: parseInt(i, 10) + 1,
                            date: calendar[i],
                            season: props.name
                        })
                    }
                }
            }
        }
    }
)(SchedulerComponent);
