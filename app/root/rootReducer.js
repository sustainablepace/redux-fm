import {combineReducers} from 'redux'
import currentDate from './currentDate/currentDateReducer'
import displayCurrentDate from './displayCurrentDate/displayCurrentDateReducer'
import season from './season/seasonReducer'
import scheduler from './scheduler/schedulerReducer'

export default combineReducers({currentDate, displayCurrentDate, season, scheduler})