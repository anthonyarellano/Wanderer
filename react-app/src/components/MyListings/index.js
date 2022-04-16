import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserListings } from '../../store/listings';

const MyListings = () => {
    const user = useSelector((state) => state.session.user);
    const listings = useSelector((state) => Object.values(state.listings))
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUserListings(user.id));
    }, [dispatch, user.id]);

    return (
        <div className="my-listings-container">
            <div>
                <p style={{fontSize: "40px"}} className="big-font">Your Listings</p>
            </div>
            {listings?.map((listing) => (
                <p>{listing?.title}</p>
            ))}
        </div>
    )
};

export default MyListings;
