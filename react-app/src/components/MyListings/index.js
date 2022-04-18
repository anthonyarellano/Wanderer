import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserListings } from '../../store/listings';
import MyListingCard from './MyListingCard';

const MyListings = () => {
    const user = useSelector((state) => state.session.user);
    const listings = useSelector((state) => state.listings.listings)
    const dispatch = useDispatch();

    let listingArr;
    if (listings) {
        listingArr = Object.values(listings);
    };

    useEffect(() => {
        dispatch(getUserListings(user.id));
    }, [dispatch, user.id]);

    return (
        <div style={{marginLeft: "5%"}} className="my-listings-container">
            <div>
                <p style={{fontSize: "40px"}} className="big-font">Your Listings</p>
            </div>
            {listingArr?.map((listing) => (
                <MyListingCard listing={listing} />
            ))}
        </div>
    )
};

export default MyListings;
