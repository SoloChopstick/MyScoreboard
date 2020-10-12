import React from "react"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
import "./CalendarDates.css"

import { Link } from "react-router-dom"


const CalendarDates = (props) => {
    let {currSeason} = props;
    currSeason = parseInt(currSeason);
    return (
        <div className="calendarDates">
            <nav className="cal-links">
                <Link to={`/players/${currSeason - 1}`}>
                    <button type="button" value="back" >
                        <FaArrowCircleLeft />
                    </button>
                </Link>
                <h3>{currSeason - 1} - {currSeason}</h3>
                <h3> | </h3>
                <h3>{currSeason} - {currSeason + 1} </h3>
                <h3> | </h3>
                <h3>{currSeason + 1} - {currSeason + 2}</h3>
                <Link to={`/players/${currSeason + 1}`}>
                    <button type="button" value="forward">
                        <FaArrowCircleRight />
                    </button>
                </Link>
            </nav>
        </div>
    )
}

export default CalendarDates