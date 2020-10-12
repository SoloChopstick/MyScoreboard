import React from "react"
import { Link } from "react-router-dom"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
import "./CalendarDates.css"


const CalendarDates = (props) => {
    let { today } = props;
    let yesterdayYesterday = new Date(today.getTime() - (86400000 * 2));
    let yesterday = new Date(today.getTime() - 86400000);
    let tomorrow = new Date(today.getTime() + 86400000);
    let tomorrowTomorrow = new Date(today.getTime() + (86400000 * 2));

    let yesterdayYesterdayLink = yesterdayYesterday.toDateString();
    let yesterdayLink = yesterday.toDateString();
    let todayLink = today.toDateString();
    let tomorrowLink = tomorrow.toDateString();
    let tomorrowTomorrowLink = tomorrowTomorrow.toDateString();

    return (
        <div className="calendarDates">
            <nav className="cal-links">
                <Link to={`/games/${yesterday}`}>
                    <button type="button" value="back" >
                        <FaArrowCircleLeft />
                    </button>
                </Link>
                <div className="otherDatesBefore">
                    {yesterdayYesterdayLink}
                </div>
                <div className="otherDates">
                    {yesterdayLink}
                </div>
                <div className="currentDate">
                    {todayLink}
                </div>
                <div className="otherDates">
                    {tomorrowLink}
                </div>
                <div className="otherDatesBefore">
                    {tomorrowTomorrowLink}
                </div>
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