import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './timer.css';

const countdownTo = "Jan 1, 2031 00:00:00";

class CountdownTimer extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var countdownTime = new Date(countdownTo).getTime();

        var x = setInterval(() => {
            var now = new Date().getTime();

            var dist = countdownTime - now;

            var days = Math.floor(dist / (1000 * 60 * 60 * 24));
            var hours = Math.floor(dist % (1000 * 60 * 60 * 24) /(1000 * 60 * 60));
            var minutes = Math.floor(dist % (1000 * 60 * 60) /(1000 * 60));
            var seconds = Math.floor(dist % (1000 * 60) / 1000);

            document.getElementById("days").innerHTML = days.toString();
            document.getElementById("hours").innerHTML = hours.toString();
            document.getElementById("minutes").innerHTML = minutes.toString();
            document.getElementById("seconds").innerHTML = seconds.toString();
        }, 900);
    }

    render() {
        return(
            <div className="container timer-counter">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="timer timer-sm">
                            <div className="day-timer text-center">
                                <p id="days">9999</p>
                            </div>
                            <div className="timer-label text-center">
                                HARI
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="timer timer-sm">
                            <div className="hour-timer text-center">
                                <p id="hours">23</p>
                            </div>
                            <div className="timer-label text-center">
                                JAM
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="timer timer-sm">
                            <div className="minute-timer text-center">
                                <p id="minutes">59</p>
                            </div>
                            <div className="timer-label text-center">
                                MENIT
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="timer timer-sm">
                            <div className="second-timer text-center">
                                <p id="seconds">59</p>
                            </div>
                            <div className="timer-label text-center">
                                DETIK
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountdownTimer;