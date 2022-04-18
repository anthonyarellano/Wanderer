import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getSingleReservation } from "../../store/reservations";
import { useState } from 'react';
import YourStay from "./YourStay";
import ReservationDetails from "./ReservationDetails";
import './style/trip-page.css';

const TripPage = () => {
    const user = useSelector((state) => state.session.user);
    const reservation = useSelector((state) => Object.values(state.reservations));
    const dispatch = useDispatch();
    const { reservationId } = useParams();

    console.log(reservation);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        dispatch(getSingleReservation(reservationId))
            .then(() => setLoaded(() => true));
    }, [dispatch, reservationId])

    if (user.id !== reservation[0]?.user_id && loaded) {
        return (
            <Redirect to="/" />
        )
    };

    return (
        <div className="flex trip-page-container">
            <div
                className="trip-left-half-container"
                style={{
                        width: "30%"
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
            <div>
                im a map
                {/* google maps component */}
            </div>
        </div>
    )
};

export default TripPage;
