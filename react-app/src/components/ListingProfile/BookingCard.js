const BookingCard = ({ executeScroll, startDate, endDate, listing }) => {
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
                <div>
                    <input
                        type='number'
                        style={{ width: "100%" }}
                        className='booking-input-box'
                        placeholder='Enter amount of guests'
                    />
                </div>
            </div>
            <div
                className='booking-availability-button'
                onClick={executeScroll}
                style={{ textAlign: 'center', cursor: 'pointer' }}>
                Check availability
            </div>
        </div>
    )
};

export default BookingCard;
