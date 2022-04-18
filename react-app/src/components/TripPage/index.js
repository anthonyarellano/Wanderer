import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleReservation } from "../../store/reservations";

const TripPage = () => {
    const user = useSelector((state) => state.session.user);
    const reservation = useSelector((state) => state.reservations);
    const dispatch = useDispatch();
    const { reservationId } = useParams();

    useEffect(() => {
        dispatch(getSingleReservation(reservationId));
    }, [dispatch, reservationId])

    return (
        <p>trip page</p>
    )
};

export default TripPage;
