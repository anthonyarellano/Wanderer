import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListing, getImages } from '../../store/listings';
import Calendar from 'react-calendar';
import AmenitiesCard from './AmenitiesCard';
import './style/listing-profile.css';
import './style/calendar.css';;

const ListingProfile = () => {
    const listing = useSelector((state) => Object.values(state.listings.selected)[0])
    const images = useSelector((state) => Object.values(state.listings.images))
    const secondaryImages = images.slice(1)
    const myRef = useRef(null);

    const { listingId } = useParams();
    const dispatch = useDispatch();

    const executeScroll = () => myRef.current.scrollIntoView();

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

    const disabledDates = [
        new Date(2022, 4, 20),
        new Date(2022, 4, 21)
    ]

    return (
        <div className='listing-profile-container'>
            {/* Top images */}
            <div>
                <p style={{ fontFamily: 'CerealBd', fontSize: "35px", margin: "0px 0px 5px 0px" }}>{listing?.title}</p>
                <p style={{ fontFamily: 'CerealLight', fontSize: "20px", margin: "0px 0px 15px 0px" }}>{listing?.city}, United States</p>
            </div>
            <div className='listing-profile-image-container'>
                <div className='listing-profile-main-image'>
                    <img alt='main' style={{ width: '100%', height: '100%', borderRadius: "10px 0px 0px 10px", objectFit: 'cover' }} src={images[0]}></img>
                </div>
                <div className='listing-profile-secondary-images'>
                    {secondaryImages?.map((url, i) => (
                        <img alt={`url${i}`} className='image' style={i === 1 ? style2 : i === 3 ? style3 : style1} src={url}></img>
                    ))}
                </div>
            </div>
            {/* Initial details and check availability */}
            <div className='listing-profile-lower-half-container'>
                <div className='listing-profile-section-one'>
                    <div className='listing-profile-details-one-container'>
                        <div>
                            <div>
                                <p style={{ fontSize: "22px" }} className='big-font'>
                                    {listing?.room_type} hosted by {listing?.username}
                                </p>
                            </div>
                            <div>
                                <p className='small-font'>
                                    {listing?.maximum_guests} guests &middot; {listing?.bedroom_number} bedroom(s)
                                    &middot; {listing?.bed_number} 	bed(s) &middot; {listing?.bath_number} bath(s)
                                </p>
                            </div>
                        </div>
                        <div>
                            <img alt="profile" style={{ width: "56px", height: "56px", borderRadius: "100%" }} src={listing?.user_photo}></img>
                        </div>
                    </div>
                    <div className='border-bottom'>
                        <p className='big-font sub-header'>
                            A little about the stay
                        </p>
                        <p className='small-font'>{listing?.description}</p>
                    </div>
                    <div className='border-bottom'>
                        <p className='big-font sub-header'>
                            What this place offers
                        </p>
                        <AmenitiesCard listing={listing} />
                    </div>
                    <div ref={myRef} className='border-bottom'>
                        <p className='big-font sub-header'>Select Your Dates</p>
                        <Calendar tileDisabled={({ date, view }) =>
                            (view === 'month') && // Block day tiles only
                            disabledDates.some(disabledDate =>
                                date.getFullYear() === disabledDate.getFullYear() &&
                                date.getMonth() === disabledDate.getMonth() &&
                                date.getDate() === disabledDate.getDate()
                            )} returnValue="range" onChange={(value, e) => alert(value)} minDate={new Date()} showDoubleView={true} selectRange={true} />
                    </div>
                </div>
                <div className='listing-booking-container'>
                    <div
                        style={{ fontSize: "23px" }}
                        className='flex'
                    >
                        <p style={{ margin: "0px" }} className='big-font'>${listing?.price}</p>
                        <p style={{ margin: "0px 0px 0px 3px", fontSize: "17px" }} className='small-font'>night</p>
                    </div>
                    <div className='flex small-font'>
                        <div>
                            checkin
                        </div>
                        <div>
                            checkout
                        </div>
                    </div>
                    <div className='small-font'>
                        Guests
                    </div>
                    <div className='small-font' onClick={executeScroll}>
                        check availability
                    </div>
                    {/* <Calendar minDate={new Date()} showDoubleView={true} selectRange={true}/> */}
                </div>
            </div>
        </div>
    )
};

export default ListingProfile
