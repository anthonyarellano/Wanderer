import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListing, getImages, deleteImage } from '../../store/listings';
import { formatDbDate } from '../Utils/formatDbDate';
import { createDisabledRange } from '../Utils/createdDisabledRange';
import { getReservations } from '../../store/reservations';
import ImageCard from './ImageCard';
import Modal from 'react-modal';
import AmenitiesCard from './AmenitiesCard';
import ProfileImageGallery from './ProfileImageGallery';
import BookingCard from './BookingCard';
import CustomCalendar from '../Calendar';
import LoginModal from '../LoginModal';
import './style/listing-profile.css';
import './style/calendar.css';

const ListingProfile = () => {
    const user = useSelector((state) => state.session.user);
    const listingState = useSelector((state) => state.listings.selected);
    const imagesState = useSelector((state) => state.listings.images);
    const reservations = useSelector((state) => Object.values(state.reservations.reservations))

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selected, setSelected] = useState("");
    const [unavailable, setUnavailable] = useState("");
    const [guests, setGuests] = useState(1);
    const [checkout, setCheckOut] = useState(false);
    const [loaded1, setLoaded1] = useState(false);
    const [loaded2, setLoaded2] = useState(false);
    const [loaded3, setLoaded3] = useState(false);

    const { listingId } = useParams();
    const history = useHistory();

    // Uses custom functions to format incoming date information &
    // create an array which the calendar uses to block off unavailable days.
    let disabledDates;
    if (reservations.length) {
        let formatted = formatDbDate(reservations);
        disabledDates = createDisabledRange(formatted);
    }

    let allLoaded = false;
    if (loaded1 && loaded2 && loaded3) allLoaded = true;

    // Conditional steps to ensure variable availabiliy when
    // coming from "Your Listings"
    let listing;
    let images;
    let mainImage;
    if (Object.keys(listingState).length === 0 && allLoaded) history.push('/view-listings')
    if (listingState) listing = listingState[listingId];
    if (imagesState) images = Object.values(imagesState);
    if (images) mainImage = images[0];
    const secondaryImages = images?.slice(1, 5);

    const dispatch = useDispatch();

    // ref created to allow window scroll to calendar
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();

    const openModal = () => {
        setIsOpen(true);
        return;
    };

    const closeModal = () => {
        setIsOpen(false);
        return
    };

    // function for handling image deletion.
    // frontend validation to ensure that a minimum of 5 images remain on the page.
    const handleImageDelete = async (image) => {
        if (images?.length > 5) {
            await dispatch(deleteImage(image));
        };
        if (images?.length <= 5) {
            return alert('Listing must have a minimum of 5 photos.');
        };
    };

    // when listingId changes, chain load listings, images, reservations
    // respectively.
    useEffect(() => {
        dispatch(getListing(listingId)).then(() => setLoaded1(true));
        dispatch(getImages(listingId)).then(() => setLoaded2(true));
        dispatch(getReservations(listingId)).then(() => setLoaded3(true));
    }, [listingId, dispatch]);

    const handleUnavailable = (firstDate) => {
        let i = 0;
        while (i < disabledDates?.length) {
            if (firstDate < disabledDates[i]) {
                setUnavailable(disabledDates[i])
                return;
            };
            i++;
        };
    };

    useEffect(() => {
        if (selected) {
            handleUnavailable(selected);
        }
    // eslint-disable-next-line
    }, [selected])

    const calendarFuncs = {
        selected,
        setSelected,
        unavailable,
        setStartDate,
        setEndDate,
        setUnavailable,
        setCheckOut
    }

    return (
        <>
            {allLoaded ? <div className='listing-profile-container'>

                {/* All images display modal */}
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                >
                    {allLoaded && images?.map((image, i) => (
                        <ImageCard
                            key={i}
                            user={user}
                            image={image}
                            listing={listing}
                            handleImageDelete={handleImageDelete}
                        />
                    ))}
                </Modal>

                <LoginModal setIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen}/>

                {/* Top images */}
                <div>
                    <div style={{
                        width: "1000px",
                        overflow: "clip"
                        }}>
                        <p
                            style={{ fontFamily: 'CerealBd', fontSize: "35px", margin: "0px 0px 5px 0px" }}
                        >
                            {listing?.title}
                        </p>
                    </div>
                    <p
                        style={{ fontFamily: 'CerealLight', fontSize: "20px", margin: "0px 0px 15px 0px" }}
                    >
                        {listing?.city}, {listing?.state}, United States
                    </p>
                </div>
                {allLoaded && <ProfileImageGallery
                    mainImage={mainImage}
                    secondaryImages={secondaryImages}
                    openModal={openModal}
                />}

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
                                <img
                                    alt="profile"
                                    style={{ width: "56px", height: "56px", borderRadius: "100%" }}
                                    src={listing?.user_photo}/>
                            </div>
                        </div>

                        {/* Listing Description */}
                        <div className='border-bottom'>
                            <p className='big-font sub-header'>
                                A little about the stay
                            </p>
                            <p className='small-font'>{listing?.description}</p>
                        </div>

                        {/* Amenities Display */}
                        <AmenitiesCard listing={listing} />

                        {/* Calendar Display */}
                        <div ref={myRef}>
                            <CustomCalendar funcs={calendarFuncs} ref={myRef} disabledDates={disabledDates}/>
                        </div>

                        {/* Map location display */}
                        <div>
                            <p className='big-font sub-header'>
                                Where you will be staying
                            </p>

                        </div>

                    </div>

                    <BookingCard
                        funcs={{guests, setGuests, checkout, setCheckOut}}
                        endDate={endDate}
                        startDate={startDate}
                        listing={listing}
                        executeScroll={executeScroll}
                    />

                </div>
            </div> : <img alt="loading" src={require('../LoadingModal/style/loader/Preloader_1.gif').default}/>}
        </>
    )
};

export default ListingProfile
