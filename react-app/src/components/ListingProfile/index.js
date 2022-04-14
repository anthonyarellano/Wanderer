import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getListing, getImages } from '../../store/listings';
import './style/listing-profile.css';

const ListingProfile = () => {
    const listing = useSelector((state) => Object.values(state.listings.selected)[0])
    const images = useSelector((state) => Object.values(state.listings.images))
    const secondaryImages = images.slice(1)

    const { listingId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListing(listingId))
        dispatch(getImages(listingId))
    }, [])

    return (
        <div className='listing-profile-container'>
            <div>
                {listing?.title}
            </div>
            <div className='listing-profile-image-container'>
                <div className='listing-profile-main-image'>
                    <img style={{width: '100%', height: '100%', borderRadius: "10px 0px 0px 10px"}} src={images[0]}></img>
                </div>
                <div className='listing-profile-secondary-images'>
                    {secondaryImages?.map((url) => (
                        <img className='image' style={{height: '100%', width: '100%', objectFit: "cover"}} src={url}></img>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default ListingProfile
