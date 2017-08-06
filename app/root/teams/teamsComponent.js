import {connect} from 'react-redux';
import React from 'react';

/* Presentational Component */
class TeamsComponent extends React.Component {
    componentDidMount() {
      this.props.createTeams()
    };

    render() {
        return null
    }
}

/* Container Component */
export default connect(
    null,
    (dispatch) => {
      return {
        createTeams: () => {
          const teams = [{
          	"name": "Bayern München",
          	"strength": 0.99
          },
          {
          	"name": "VfL Wolfsburg",
          	"strength": 0.8
          },
          {
          	"name": "Bayer 04 Leverkusen",
          	"strength": 0.8
          },
          {
          	"name": "Bor. Mönchengladbach",
          	"strength": 0.8
          },
          {
          	"name": "FC Schalke 04",
          	"strength": 0.8
          },
          {
          	"name": "FC Augsburg",
          	"strength": 0.7
          },
          {
          	"name": "TSG Hoffenheim",
          	"strength": 0.7
          },
          {
          	"name": "Hannover 96",
          	"strength": 0.7
          },
          {
          	"name": "Eintracht Frankfurt",
          	"strength": 0.6
          },
          {
          	"name": "SC Paderborn 07",
          	"strength": 0.6
          },
          {
          	"name": "1. FC Köln",
          	"strength": 0.6
          },
          {
          	"name": "1. FSV Mainz",
          	"strength": 0.6
          },
          {
          	"name": "Hertha BSC",
          	"strength": 0.6
          },
          {
          	"name": "Hamburger SV",
          	"strength": 0.6
          },
          {
          	"name": "VfB Stuttgart",
          	"strength": 0.6
          },
          {
          	"name": "Werder Bremen",
          	"strength": 0.6
          },
          {
          	"name": "Borussia Dortmund",
          	"strength": 0.8
          },
          {
          	"name": "SC Freiburg",
          	"strength": 0.6
          }];

          for(var i in teams) {
            dispatch({
              type: 'TEAM_CREATED',
              team: teams[i]
            })
          }
        }
      }
    }
)(TeamsComponent);
