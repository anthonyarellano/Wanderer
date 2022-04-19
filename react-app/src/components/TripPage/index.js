import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getSingleReservation } from "../../store/reservations";
import { initMapScript } from "../Utils/GoogleMapsAPI/scriptLoading";
import YourStay from "./YourStay";
import ReservationDetails from "./ReservationDetails";
import Map from "../Map";
import './style/trip-page.css';

const TripPage = () => {
    const user = useSelector((state) => state.session.user);
    const reservationState = useSelector((state) => state.reservations.selected);
    const dispatch = useDispatch();
    const { reservationId } = useParams();

    let reservation;
    if (reservationState) {
        reservation = reservationState[reservationId]
    }

    const [loaded, setLoaded] = useState(false);
    const [mapsLoaded, setMapsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getSingleReservation(reservationId))
            .then(() => setLoaded(() => true));
    }, [dispatch, reservationId])

    useEffect(() => {
        initMapScript().then(() => setMapsLoaded(() => true));
    }, [])

    if (user.id !== reservation?.user_id && loaded) {
        return (
            <Redirect to="/" />
        )
    };

    const style = {
        width: "100%",
        // height: "100%"
    };

    return (
        <div className="flex trip-page-container">
            <div
                className="trip-left-half-container"
                style={{
                        top: "0px",
                        height: "90vh",
                        width: "30%",
                        overflow: "scroll"
                       }}>
                <YourStay reservation={reservation}/>
                <ReservationDetails reservation={reservation}/>
                {/* getting there component */}
                {/* where youre staying component */}
                {/* hosted by component */}
                {/* support */}
            </div>
            <div
                style={{
                    width: "70%",
                    height: "100%",
                    overflow: 'hidden'
                }}>
                {mapsLoaded &&
                <Map style={style} lat={parseFloat(reservation?.lat)} lng={parseFloat(reservation?.lng)}/>}
            </div>
        </div>
    )
};

export default TripPage;
