import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getListing, getImages } from '../../store/listings';
import './style/listing-profile.css';

const ListingProfile = () => {
    const listing = useSelector((state) => Object.values(state.listings.selected)[0])
    const images = useSelector((state) => Object.values(state.listings.images))
    const secondaryImages = images.slice(1)
    console.log(listing);
    const { listingId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListing(listingId))
        dispatch(getImages(listingId))
    }, [listingId, dispatch])

    const style1 = {
        height: '100%', width: '100%', objectFit: "cover"
    }

    const style2 = {
        height: '100%', width: '100%', objectFit: "cover", borderRadius: "0px 10px 0px 0px"
    }

    const style3 = {
        height: '100%', width: '100%', objectFit: "cover", borderRadius: "0px 0px 10px 0px"
    }

    return (
        <div className='listing-profile-container'>
            <div>
                <p style={{fontFamily: 'CerealBd', fontSize: "35px"}}>{listing?.title}</p>
            </div>
            <div className='listing-profile-image-container'>
                <div className='listing-profile-main-image'>
                    <img alt='main' style={{width: '100%', height: '100%', borderRadius: "10px 0px 0px 10px", objectFit: 'cover'}} src={images[0]}></img>
                </div>
                <div className='listing-profile-secondary-images'>
                    {secondaryImages?.map((url, i) => (
                        <img alt={`url${i}`} className='image' style={i === 1 ? style2 : i === 3 ? style3 : style1} src={url}></img>
                    ))}
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <p>{listing?.room_type} hosted by {listing?.username}</p>
                    </div>
                    <div>
                        <p>{listing?.maximum_guests} guests &middot; {listing?.bedroom_number} bedroom(s)
                        &middot; {listing?.bed_number} 	bed(s) &middot; {listing?.bath_number} bath(s)</p>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
};

export default ListingProfile
