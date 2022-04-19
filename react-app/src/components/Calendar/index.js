import Calendar from "react-calendar";
import { useEffect } from 'react';
import { formatDateForCalendar } from "../Utils/formatDateForCalendar";
import { formatDate } from "../Utils/formatDate";

const CustomCalendar = ({ funcs, ref, disabledDates }) => {

    const {
        selected, setSelected,
        unavailable, setStartDate,
        setEndDate, setUnavailable,
        setCheckOut
    } = funcs;

    const handleDateUpdate = (dateArr) => {
        setStartDate(dateArr[0]);
        setEndDate(dateArr[1]);
    };

    const handleSelection = (date) => {
        let dateSplit = date[0].split('-');
        let firstDate = new Date(dateSplit[0], dateSplit[1], dateSplit[2])
        setSelected(firstDate)
    };

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
                (view === 'month') && // Block day tiles only
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
            // defaultValue={startDate && endDate ? [new Date(startDate), new Date(endDate)] : null}
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
