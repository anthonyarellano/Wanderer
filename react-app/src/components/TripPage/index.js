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
    const reservation = useSelector((state) => Object.values(state.reservations));
    const dispatch = useDispatch();
    const { reservationId } = useParams();
    console.log(reservation);
    console.log(reservation);
    const [loaded, setLoaded] = useState(false);
    const [mapsLoaded, setMapsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getSingleReservation(reservationId))
            .then(() => setLoaded(() => true));
    }, [dispatch, reservationId])

    useEffect(() => {
        initMapScript().then(() => setMapsLoaded(() => true));
    }, [])

    if (user.id !== reservation[0]?.user_id && loaded) {
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
                {/* your stay component */}
                <YourStay reservation={reservation[0]}/>
                {/* reservation details component */}
                <ReservationDetails reservation={reservation[0]}/>
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
                <Map style={style} lat={parseFloat(reservation[0]?.lat)} lng={parseFloat(reservation[0]?.lng)}/>}
                {/* google maps component */}
            </div>
        </div>
    )
};

export default TripPage;
