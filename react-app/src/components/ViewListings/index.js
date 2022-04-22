import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllListings } from '../../store/listings';
import ListingCard from './ListingCard';
import './style/view-listings.css';

const ViewListings = () => {
    const listings = useSelector((state) => Object.values(state.listings.listings))
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        dispatch(getAllListings()).then(() => setLoaded(true))
    }, [dispatch]);

    return (
        <>
            {loaded ? (
            <div
                className='all-listings-container'>
                {loaded && listings?.map((listing) => (
                    <div style={{ width: "300px", margin: "0px 40px 40px 40px" }}>
                        <ListingCard
                            key={listing?.id}
                            listing={listing} />
                    </div>
                ))}
            </div>) : <img  alt="loading" src={require('../LoadingModal/style/loader/Preloader_1.gif').default}/>}
        </>

    )
};

export default ViewListings;
