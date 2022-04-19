import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservationsForEdit } from '../../../store/reservations';
import { getListing } from '../../../store/listings';
import { formatDbDate } from '../../Utils/formatDbDate';
import { createDisabledRange } from '../../Utils/createdDisabledRange';
import BookingCard from '../../ListingProfile/BookingCard';
import Modal from 'react-modal';
import CustomCalendar from '../../Calendar';

const EditReservation = ({ reservation }) => {
    const reservationsState =  useSelector((state) => state.reservations.notSelected)
    const listingState = useSelector((state) => state.listings.selected);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selected, setSelected] = useState("");
    const [unavailable, setUnavailable] = useState("");
    const [checkout, setCheckOut] = useState(false);
    const [guests, setGuests] = useState(0)
    const dispatch = useDispatch();

    let reservations;
    let listing;
    if (reservationsState)  reservations = Object.values(reservationsState);
    if (listingState) listing = listingState[reservation?.listing_id];


    const calendarFuncs = {
        selected,
        setSelected,
        unavailable,
        setStartDate,
        setEndDate,
        setUnavailable,
        setCheckOut
    };

    const bookingFuncs = {
        guests, setGuests,
        checkout, setCheckOut
    };

    const closeModal = () => {
        setIsOpen(false);
        return
    };

    let disabledDates;
    let formattedDates;
    if (reservations?.length) {
        const curr = reservations.findIndex((element) => element.id === reservation?.id)
        formattedDates = formatDbDate([reservations[curr]])
        reservations.splice(curr, 1)
        let formatted = formatDbDate(reservations);
        disabledDates = createDisabledRange(formatted);
    };

    useEffect(() => {
        if (formattedDates?.length) {
            setStartDate(formattedDates[0][0]);
            setEndDate(formattedDates[0][1]);
            setGuests(reservation?.guests);
        };
    }, [reservations?.length])

    useEffect(() => {
        if (reservation) {
            dispatch(getReservationsForEdit(reservation?.listing_id));
        }
        dispatch(getListing(reservation?.listing_id));
    }, [reservation, dispatch]);

    return (
        <>
            <Modal
                style={{content: {top: "50%", left: "25%"}}}
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <CustomCalendar
                    disabledDates={disabledDates}
                    funcs={calendarFuncs}
                />
                <BookingCard
                    funcs={bookingFuncs}
                    startDate={startDate}
                    endDate={endDate}
                    listing={listing}
                    editForm={true}
                    reservationId={reservation?.id}
                />
            </Modal>
            <div
                onClick={() => setIsOpen(true)}
                style={{
                    justifyContent: "space-between",
                    cursor: "pointer",
                    borderTop: "1px solid #DDDDDD",
                    margin: "1px 20px 20px 20px"
                }}
                className='flex'>
                <div className='flex'>
                    <img
                        alt="house"
                        style={{
                            width: "20px",
                            height: "20px"
                        }}
                        src={require('../style/images/edit.png').default} />
                    <p
                        style={{
                            marginLeft: "10px"
                        }}
                        className='small-font'>Edit reservation</p>
                </div>
                <div>
                    <img
                        alt="arrow"
                        style={{
                            width: "15px",
                            height: "15px"
                        }}
                        src={require('../style/images/arrow.png').default} />
                </div>
            </div>
        </>
    )
};

export default EditReservation;
