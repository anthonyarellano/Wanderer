import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getListing, getImages } from '../../store/listings';

const ListingProfile = () => {
    const listing = useSelector((state) => Object.values(state.listings.selected)[0])
    const images = useSelector((state) => Object.values)
    const { listingId } = useParams();
    const dispatch = useDispatch();
    console.log(listing);
    useEffect(() => {
        dispatch(getListing(listingId))
        dispatch(getImages(listingId))
    }, [])

    return (
        <div>
            <div>
                {listing?.title}
            </div>
            <div className='listing-profile-image-container'>

            </div>

        </div>
    )
};

export default ListingProfile
