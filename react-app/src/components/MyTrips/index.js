import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserReservations } from "../../store/reservations";

const MyTrips = () => {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(getUserReservations(user.id))
    }, [dispatch, user.id])

    return (
        <div style={{marginLeft: "5%"}} className="my-listings-container">
            <div>
                <p style={{fontSize: "40px"}} className="big-font">
                    Your Trips
                </p>
            </div>
        </div>
    )
};

export default MyTrips;
