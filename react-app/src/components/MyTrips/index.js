import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserReservations } from "../../store/reservations";
import MyTripCard from "./MyTripCard";

const MyTrips = () => {
    const user = useSelector((state) => state.session.user);
    const reservations = useSelector((state) => state.reservations)
    const dispatch = useDispatch();

    let reservationsArr;
    if (reservations) {
        reservationsArr = Object.values(reservations);
    };

    useEffect(() => {
        dispatch(getUserReservations(user.id))
    }, [dispatch, user.id])

    return (
        <div style={{marginLeft: "5%"}}>
            <div>
                <p style={{fontSize: "40px"}} className="big-font">
                    Your Trips
                </p>
            </div>
            <div
                style={{flexWrap: 'wrap'}}
                className="flex"
            >
                {reservationsArr?.map((reservation, i) => (
                    <MyTripCard key={i} reservation={reservation} />
                ))}
            </div>
        </div>
    )
};

export default MyTrips;
