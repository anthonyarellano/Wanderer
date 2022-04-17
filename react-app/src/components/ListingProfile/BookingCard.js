import { useState } from 'react';

const BookingCard = ({ executeScroll, startDate, endDate, listing, funcs }) => {
    const [checkout, setCheckOut] = useState(false);
    const { guests, setGuests } = funcs;

    let submitReady;
    if (startDate && endDate && guests <= listing?.maximum_guests) submitReady = true;

    const handleCheckAvail = () => {
        if (!submitReady) {
            executeScroll()
        };
        if (submitReady && startDate && endDate) {
            setCheckOut(true);
            console.log("SUBMITTED!");
        };
    };

    const handleSet = (key) => {
        if (key === "add" && guests < listing?.maximum_guests) {
            setGuests((guests) => guests + 1)
        };
        if (key === "subtract" && guests <= listing?.maximum_guests && guests > 0) {
            setGuests((guests) => guests - 1)
        }

    }

    let links;
    if (checkout) {
        links = (
            <div>
                <div
                    className='booking-availability-button'
                    onClick={handleCheckAvail}
                    style={{ textAlign: 'center', cursor: 'pointer' }}>
                    Reserve
                </div>
            </div>
        )
    } if (!checkout) {
        links = (
            <div
                className='booking-availability-button'
                onClick={handleCheckAvail}
                style={{ textAlign: 'center', cursor: 'pointer' }}>
                Check availability
            </div>
        )
    }


    return (
        <div className='listing-booking-container'>
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
                    <div className="big-font">
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
