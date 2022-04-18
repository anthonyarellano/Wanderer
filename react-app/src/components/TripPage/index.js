import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getSingleReservation } from "../../store/reservations";
import { useState } from 'react';
const TripPage = () => {
    const user = useSelector((state) => state.session.user);
    const reservation = useSelector((state) => Object.values(state.reservations));
    const dispatch = useDispatch();
    const { reservationId } = useParams();

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
        <p>trip page</p>
    )
};

export default TripPage;
