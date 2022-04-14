import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getListing } from '../../store/listings';

const ListingProfile = () => {
    const { listingId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListing(listingId))
    }, [])

    return (
        <p>Listing page for listing: {listingId}</p>
    )
};

export default ListingProfile
