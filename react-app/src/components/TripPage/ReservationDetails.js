const ReservationDetails = ({reservation}) => {
    console.log(reservation);
    return (
        <div className='your-stay-container-secondary'>
            <div style={{marginLeft: "4%"}}>
                <div
                    style={{ margin: "4% 0% 4% 0%" }}>
                    <p
                        className='big-font no-margin trip-page-title'
                    >
                        Reservation details
                    </p>
                </div>
                <div>
                    <p className="big-font no-margin">Who's coming</p>
                </div>
            </div>
        </div>
    )
};

export default ReservationDetails;
