import CurrentDate from './currentDate/currentDateComponent'
import TeamsComponent from './teams/teamsComponent'
import SeasonComponent from './season/seasonComponent'
import SchedulerComponent from './scheduler/schedulerComponent'
import DisplayCurrentDate from './displayCurrentDate/displayCurrentDateComponent'
import NextDay from './nextDay/nextDayComponent'
import Calendar from './calendar/calendarComponent'
import MatchSimulator from './matchSimulator/matchSimulatorComponent'
import React from 'react';

export default () => (
    <div>
        <TeamsComponent/>
        <SeasonComponent/>
        <SchedulerComponent/>
        <CurrentDate/>
        <DisplayCurrentDate/>
        <Calendar/>
        <MatchSimulator/>
        <NextDay/>
    </div>
);
