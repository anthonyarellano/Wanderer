import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllListings } from '../../store/listings';

const ViewListings = () => {
    const listings = useSelector((state) => Object.values(state.listings.listings))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllListings())
    }, []);

    return (
        <p>Listings galore</p>
    )
};

export default ViewListings;
