import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllListings } from '../../store/listings';
import ListingCard from './ListingCard';
import './style/view-listings.css';

const ViewListings = () => {
    const listings = useSelector((state) => Object.values(state.listings.listings))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllListings())
    }, [dispatch]);

    return (
        <div
            className='all-listings-container'>
            {listings?.map((listing) => (
                <div style={{ width: "300px", margin: "0px 40px 40px 40px" }}>
                    <ListingCard
                        key={listing?.id}
                        listing={listing} />
                </div>
            ))}
        </div>

    )
};

export default ViewListings;
