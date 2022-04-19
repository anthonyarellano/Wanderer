import CancelReservation from "./Sub-Components/CancelReservation";
import EditReservation from "./Sub-Components/EditReservation";

const ReservationDetails = ({reservation}) => {
    console.log(reservation);
    return (
        <div className='your-stay-container-secondary'>
            <div style={{margin: "0% 0% 4% 4%"}}>
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
                <div>
                    <p className="small-font no-margin">{reservation?.guests} guest(s)</p>
                </div>
            </div>
            <CancelReservation id={reservation?.id}/>
            <EditReservation />
        </div>
    )
};

export default ReservationDetails;
