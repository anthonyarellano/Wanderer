import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation, editReservation } from '../../store/reservations';
import { daysBetween } from '../Utils/daysBetween';
import { useHistory } from 'react-router-dom';
import LoginModal from '../LoginModal';

const BookingCard = ({ executeScroll, startDate, endDate, listing, funcs, editForm, reservationId }) => {
    const user = useSelector((state) => state.session.user);
    const [nights, setNights] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState('login');

    const dispatch = useDispatch();
    const history = useHistory();

    const { guests, setGuests, checkout, setCheckOut } = funcs;

    let submitReady;
    if (startDate && endDate && guests <= listing?.maximum_guests) submitReady = true;

    // Setting nights whenever the startDate or endDate are
    // changed.
    useEffect(() => {
        setNights(() => daysBetween(startDate, endDate))
    }, [startDate, endDate])

    const handleCheckAvail = () => {
        if (!submitReady) {
            executeScroll()
        };
        if (submitReady && startDate && endDate) {
            setCheckOut(true);
            setNights(daysBetween(startDate, endDate));
        };
    };

    const handleSet = (key) => {
        if (key === "add" && guests < listing?.maximum_guests) {
            setGuests((guests) => guests + 1)
        };
        if (key === "subtract" && guests <= listing?.maximum_guests && guests > 1) {
            setGuests((guests) => guests - 1)
        };

    };

    const handleReservation = async () => {
        const reservation = {
            user_id: user?.id,
            listing_id: listing?.id,
            total_cost: nights * listing?.price,
            start_date: startDate,
            end_date: endDate,
            guests
        };
        if (editForm) {
            await dispatch(editReservation(reservation, reservationId))
                .then(() => history.push('/my-trips'));
        };
        if (!editForm) {
            await dispatch(createReservation(reservation))
                .then(() => history.push('/my-trips'));
        };
    };

    let links;
    if (checkout && user) {
        links = (
            <div>
                <div
                    className='booking-availability-button'
                    onClick={handleReservation}
                    style={{ textAlign: 'center', cursor: 'pointer' }}>
                    Reserve
                </div>
                <div
                    style={{
                        justifyContent: "space-between",
                        padding: "15px"
                    }}
                    className='small-font flex'>
                    <div>
                        ${listing?.price} x {nights} nights
                    </div>
                    <div>
                        ${listing?.price * nights}.00
                    </div>
                </div>
                <div
                    style={{
                        justifyContent: "space-between",
                        borderTop: "1px solid #DDDDDD",
                        padding: "15px"
                    }}
                    className='big-font flex'>
                    <div>
                        Total before taxes
                    </div>
                    <div>
                        ${listing?.price * nights}.00
                    </div>
                </div>
            </div>
        )
    } if (!checkout && user) {
        links = (
            <div
                className='booking-availability-button'
                onClick={handleCheckAvail}
                style={{ textAlign: 'center', cursor: 'pointer' }}>
                Check availability
            </div>
        )
    } if (!user) {
        links = (
            <div
                className='booking-availability-button'
                style={{
                    textAlign: 'center',
                    cursor: "pointer"
                }}
                onClick={() => setIsOpen(true)}>
                Login to view availability
            </div>
        )
    }


    return (
        <div className='listing-booking-container'>
            <LoginModal form={form} setForm={setForm} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
            <div
                style={{ fontSize: "23px" }}
                className='flex'
            >
                <p
                    style={{ margin: "0px" }}
                    className='big-font'>
                    ${listing?.price}
                </p>
                <p
                    style={{ margin: "0px 0px 0px 3px", fontSize: "17px" }} c
                    className='small-font'>
                    night
                </p>
            </div>
            <div
                style={{ marginTop: "15px" }}
                className='flex small-font'>
                <div
                    style={{ borderRight: "0px", borderRadius: "10px 0px 0px 0px" }}
                    className='booking-availability-input'>
                    <div className='booking-availability-text-header'>
                        CHECK-IN
                    </div>
                    <div>
                        <input
                            type='date'
                            readOnly={true}
                            className='booking-input-box'
                            value={startDate}
                        />
                    </div>
                </div>
                <div
                    style={{ borderRadius: "0px 10px 0px 0px" }}
                    className='booking-availability-input'>
                    <div className='booking-availability-text-header'>
                        CHECK-OUT
                    </div>
                    <div>
                        <input
                            type='date'
                            value={endDate}
                            readOnly={true}
                            className='booking-input-box' />
                    </div>
                </div>
            </div>
            <div
                style={{ borderTop: "0px", borderRadius: "0px 0px 10px 10px" }}
                className='booking-availability-input'>
                <div className='booking-availability-text-header'>
                    GUESTS
                </div>
                <div style={{ justifyContent: "space-between" }} className='flex'>
                    <div className="small-font">
                        {guests}
                    </div>
                    <div className='flex'>
                        <div
                            className='big-font unselectable'
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => handleSet("subtract")}>-</div>
                        <div
                            className='big-font unselectable'
                            style={{ cursor: "pointer", marginLeft: "15px", fontSize: "20px" }}
                            onClick={() => handleSet("add")}>+</div>
                    </div>
                </div>
            </div>
            {links}
        </div>
    )
};

export default BookingCard;
