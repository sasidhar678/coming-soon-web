import React, { Component } from 'react';
import moment from 'moment';
import FlipUnitContainer from './FlipUnitContainer';

const RELEASE_DATE = "2019-04-01 10:00:00";

export default class FlipClock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            daysShuffle: true,
            hours: 0,
            hoursShuffle: true,
            minutes: 0,
            minutesShuffle: true,
            seconds: 0,
            secondsShuffle: true
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            50
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        const releaseDate = new moment(RELEASE_DATE);
        // get current date
        const now = moment();
        // calculate difference b/w current date & release date
        const diff = releaseDate.diff(now);

        const temp = moment.utc(diff);
        // set time units
        const days = releaseDate.diff(now, 'days');
        const hours = temp.hours();
        const minutes = temp.minutes();
        const seconds = temp.seconds();
        // on hour chanage, update days and shuffle state
        if (days !== this.state.days) {
            const daysShuffle = !this.state.daysShuffle;
            this.setState({
                days,
                daysShuffle
            });
        }
        // on hour chanage, update hours and shuffle state
        if (hours !== this.state.hours) {
            const hoursShuffle = !this.state.hoursShuffle;
            this.setState({
                hours,
                hoursShuffle
            });
        }
        // on minute chanage, update minutes and shuffle state
        if (minutes !== this.state.minutes) {
            const minutesShuffle = !this.state.minutesShuffle;
            this.setState({
                minutes,
                minutesShuffle
            });
        }
        // on second chanage, update seconds and shuffle state
        if (seconds !== this.state.seconds) {
            const secondsShuffle = !this.state.secondsShuffle;
            this.setState({
                seconds,
                secondsShuffle
            });
        }
    }

    render() {

        // state object destructuring
        const {
            days,
            hours,
            minutes,
            seconds,
            daysShuffle,
            hoursShuffle,
            minutesShuffle,
            secondsShuffle
        } = this.state;

        return (
            /* jshint ignore : start */
            <div className={'flipClock'}>
                <FlipUnitContainer
                    digit={days}
                    shuffle={daysShuffle}
                    units="Days"
                />
                <FlipUnitContainer
                    digit={hours}
                    shuffle={hoursShuffle}
                    units="Hours"
                />
                <FlipUnitContainer
                    digit={minutes}
                    shuffle={minutesShuffle}
                    units="Minutes"
                />
                <FlipUnitContainer
                    digit={seconds}
                    shuffle={secondsShuffle}
                    units="Seconds"
                />
            </div>
            /* jshint ignore : end */
        );
    }
}