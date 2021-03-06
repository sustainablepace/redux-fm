import {combineReducers} from 'redux'
import currentDate from './currentDate/currentDateReducer'
import displayCurrentDate from './displayCurrentDate/displayCurrentDateReducer'
import season from './season/seasonReducer'
import scheduler from './scheduler/schedulerReducer'
import calendar from './calendar/calendarReducer'
import matchSimulator from './matchSimulator/matchSimulatorReducer'

export default combineReducers({
    currentDate,
    displayCurrentDate,
    season,
    scheduler,
    calendar,
    matchSimulator
})
