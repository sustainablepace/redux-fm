import {connect} from 'react-redux';
import React from 'react';
import Moment from 'moment'

/* Presentational Component */
class NextDayComponent extends React.Component {
    render() {
        return <button onClick={this.props.nextDay}>
            Next day
        </button>
    }
}

/* Container Component */
export default connect(
    null,
    (dispatch) => {
      return {
        nextDay: () => {
          dispatch({
            type: 'NEXT_DAY'
          })
        }
      }
    }
)(NextDayComponent);
