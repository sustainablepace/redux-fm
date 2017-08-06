import {connect} from 'react-redux';
import React from 'react';
import Moment from 'moment'

/* Presentational Component */
class CurrentDateComponent extends React.Component {
    componentDidUpdate() {
      this.props.dateChanged(this.props.date)
    };

    componentDidMount() {
      this.props.dateChanged(this.props.date)
    };
    
    render() {
        return null
    }
}

/* Container Component */
export default connect(
    (state, ownProps) => {
        return {
            date: state.currentDate.date
        }
    },
    (dispatch) => {
      return {
        dateChanged: (date) => {
          dispatch({
            type: 'DATE_CHANGED',
            date: Moment(date).format('YYYY') + '-W' + Moment(date).format('W-E')
          })
        }
      }
    }
)(CurrentDateComponent);
