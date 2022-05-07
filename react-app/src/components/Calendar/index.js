import Calendar from "react-calendar";
import { useEffect } from 'react';
import { formatDateForCalendar } from "../Utils/formatDateForCalendar";
import { formatDate } from "../Utils/formatDate";

// Calendar component for booking reservations
const CustomCalendar = ({ funcs, ref, disabledDates }) => {

    // useState functions passed in as the prop 'funcs'
    const {
        selected, setSelected,
        unavailable, setStartDate,
        setEndDate, setUnavailable,
        setCheckOut
    } = funcs;

    // Sets start and end date upon user date selection
    const handleDateUpdate = (dateArr) => {
        setStartDate(dateArr[0]);
        setEndDate(dateArr[1]);
    };

    // When user clicks the first date in range on calender, this function is called.
    // Creates date object from 'YYYY-MM-DD' format and sets 'selected' variabled
    // 'selected' is then passed in to calendar as the minDate prop.
    const handleSelection = (date) => {
        let dateSplit = date[0].split('-');
        let firstDate = new Date(dateSplit[0], dateSplit[1], dateSplit[2])
        setSelected(firstDate)
    };

    // takes in first date in selected range, loops through disabled to find first
    // unavailable date in the future. Sets that date as the maxDate prop in calendar.
    const handleUnavailable = (firstDate) => {
        let i = 0;
        while (i < disabledDates?.length) {
            if (firstDate < disabledDates[i]) {
                setUnavailable(disabledDates[i])
                return;
            };
            i++;
        };
    };

    const clearDates = () => {
        setSelected("");
        setUnavailable("");
        setStartDate("");
        setEndDate("");
        setCheckOut(false);
    };

    // invokes 'handleUnavailable' any time 'selected' is changed. 
    useEffect(() => {
        if (selected) {
            handleUnavailable(selected);
        }
    // eslint-disable-next-line
    }, [selected])

    return (
        <div ref={ref} className='border-bottom'>
            <p className='big-font sub-header'>Select Your Dates</p>
            <Calendar tileDisabled={({ date, view }) =>
                (view === 'month') &&
                disabledDates?.some(disabledDate =>
                    date.getFullYear() === disabledDate.getFullYear() &&
                    date.getMonth() === disabledDate.getMonth() &&
                    date.getDate() === disabledDate.getDate()
                )}
                returnValue="range"
                onChange={(value, e) => handleDateUpdate(formatDateForCalendar(value))}
                onClickDay={(value, e) => handleSelection(formatDate([value]))}
                minDate={selected ? selected : new Date()}
                maxDate={unavailable ? unavailable : null}
                showDoubleView={true}
                selectRange={true}
            />
            <p
                className='big-font'
                style={{ cursor: "pointer", textDecoration: 'underline' }}
                onClick={clearDates}
            >
                clear dates
            </p>
        </div>
    )
};

export default CustomCalendar;
