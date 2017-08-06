import {connect} from 'react-redux';
import React from 'react';
import Moment from 'moment'

/* Presentational Component */
class DisplayCurrentDateComponent extends React.Component {
    render() {
        return <div>{this.props.formattedDate}</div>
    }
}

/* Container Component */
export default connect(
    (state, ownProps) => {
        return {
            formattedDate: Moment(state.displayCurrentDate.date).format('MMMM Do, YYYY')
        }
    },
    null
)(DisplayCurrentDateComponent);
