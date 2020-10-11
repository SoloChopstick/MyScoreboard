import React from "react"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
import "./CalendarDates.css"


const CalendarDates = (props) => {
    const {currSeason} = props;
    return (
        <nav className="nav-links">
            <button type="button" value="back" onClick={props.prevSeason}>
                <FaArrowCircleLeft />
            </button>
            <h3>{currSeason - 1} - {currSeason}</h3>
            <h3>{currSeason} - {currSeason + 1} </h3>
            <h3>{currSeason + 1} - {currSeason + 2}</h3>
            <button type="button" value="forward" onClick={props.nextSeason}>
                <FaArrowCircleRight />
            </button>
        </nav>
    )
}

export default CalendarDates