import {connect} from 'react-redux';
import React from 'react';

/* Presentational Component */
class MatchSimulatorComponent extends React.Component {
    todaysFixtures() {
        return this.props.fixtures.filter((fixture) => {
            return this.props.date === fixture.date
        })
    }

    componentDidUpdate() {
        this.props.simulateMatches(this.todaysFixtures())
    };

    render() {
        return null
    }
}

/* Container Component */
export default connect(
    (state, ownProps) => {
        return state.matchSimulator
    },
    (dispatch) => {
        const simulate = (fixture) => {
            if( fixture.fixture.home.strength + 2 * Math.random() > fixture.fixture.away.strength + 2 * Math.random() ) {
                return {
                    home: 1,
                    away: 0
                };
            }
            else if( fixture.fixture.home.strength  + 2 * Math.random() < fixture.fixture.away.strength  + 2 * Math.random() ) {
                return {
                    home: 0,
                    away: 1
                };
            }
            return {
                home: 0,
                away: 0
            };
        };
        return {
            simulateMatches: (fixtures) => {
                for (let i in fixtures) {
                    const fixture = fixtures[i];
                    const result = simulate(fixture);
                    setTimeout(() => {
                        dispatch({
                            type: 'MATCH_FINISHED',
                            fixture: fixtures[i].fixture,
                            matchday: fixtures[i].matchday,
                            date: fixtures[i].date,
                            season: fixtures[i].season,
                            result: result
                        });

                    }, 4000*Math.random());
                }
            }
        }
    }
)(MatchSimulatorComponent);
