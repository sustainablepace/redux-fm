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
        var pool   = [];
        var rounds = [];
        for( var i = 0; i < teams.length; i++ ) {
          pool.push( i );
        }
        for( var j = 0; j < teams.length - 1 ; j++ ) {
          var roundFirstHalf  = [];
          var roundSecondHalf = [];
          for( var k = 0; k < teams.length / 2; k++ ) {
            var home = pool[ k                    ];
            var away = pool[ teams.length - k - 1 ];
            roundFirstHalf.push(  [teams[ home ], teams[ away ] ] );
            roundSecondHalf.push( [teams[ away ], teams[ home ] ] );
          }
          rounds[ j                    ] = roundFirstHalf;
          rounds[ j + teams.length - 1 ] = roundSecondHalf;

          // See http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm
          var pivot = pool.shift();
          var first = pool.shift();
          pool.push( first );
          pool.unshift( pivot );
        }
        var fixtures = [];
        for( var i in rounds ) {
          fixtures.push( rounds[ i ] );
        }
        return fixtures
      }


      return {
        scheduleFixtures: (props) => {
          const fixtures = createFixtures(props.teams)
          for(var i in fixtures) {
            for(var j in fixtures[i]) {
              dispatch({
                type: 'FIXTURE_SCHEDULED',
                fixture: fixtures[i][j],
                matchday: parseInt(i, 10) + 1,
                season: props.name
              })
            }
          }
        }
      }
    }
)(SchedulerComponent);
