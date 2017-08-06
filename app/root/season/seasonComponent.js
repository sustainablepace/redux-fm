import {connect} from 'react-redux';
import React from 'react';

/* Presentational Component */
class TeamsComponent extends React.Component {
    componentDidUpdate() {
      if(this.props.teams.length === 18 && this.props.ready) {
        this.props.seasonReady(this.props.teams, this.props.name, this.props.year)
      }
    };

    render() {
        return null
    }
}

/* Container Component */
export default connect(
  (state, ownProps) => {
      return {
          teams: state.season.teams,
          ready: state.season.ready,
          year: state.season.year,
          name: state.season.year + '/' + (state.season.year + 1).toString().substring(2,4)
      }
  },
    (dispatch) => {
      return {
        seasonReady: (teams, name, year) => {
            dispatch({
              type: 'SEASON_READY',
              teams: teams,
              name: name,
              year: year
            })
        }
      }
    }
)(TeamsComponent);
