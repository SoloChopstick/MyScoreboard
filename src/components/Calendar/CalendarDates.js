import React from "react"
import { Link } from "react-router-dom"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
import "./CalendarDates.css"


const CalendarDates = (props) => {
    let { today } = props;
    let yesterday = new Date();
    let tomorrow = new Date();
    yesterday.setDate(today.getDate() - 1);
    tomorrow.setDate(today.getDate() - 1);
    console.log(yesterday)
    console.log(today)
    console.log(tomorrow)

    let ydadd = String(yesterday.getDate()).padStart(2, '0');
    let ydamm = String(yesterday.getMonth() + 1).padStart(2, '0');
    let ydayyyy = yesterday.getFullYear();
    let yesterdayLink = ydayyyy + ydamm + ydadd;

    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let todayLink = yyyy + mm + dd;

    let tmwdd = String(yesterday.getDate()).padStart(2, '0');
    let tmwmm = String(yesterday.getMonth() + 1).padStart(2, '0');
    let tmwyyyy = yesterday.getFullYear();
    let tomorrowLink = tmwyyyy + tmwmm + tmwdd;

    return (
        <div className="calendarDates">
            <nav className="cal-links">
                <Link to={`/games/${yesterday}`}>
                    <button type="button" value="back" >
                        <FaArrowCircleLeft />
                    </button>
                </Link>
                <h3>{yesterdayLink}</h3>
                <h3> | </h3>
                <h3>{todayLink} </h3>
                <h3> | </h3>
                <h3>{tomorrowLink}</h3>
                <Link to={`/games/${tomorrow}`}>
                    <button type="button" value="forward">
                        <FaArrowCircleRight />
                    </button>
                </Link>
            </nav>
        </div>
    )
}

export default CalendarDates