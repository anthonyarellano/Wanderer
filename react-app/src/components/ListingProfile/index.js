import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListing, getImages, deleteImage } from '../../store/listings';
import { formatDate } from '../Utils/formatDate';
import { formatDbDate } from '../Utils/formatDbDate';
import { createDisabledRange } from '../Utils/createdDisabledRange';
import { getReservations } from '../../store/reservations';
import { formatDateForCalendar } from '../Utils/formatDateForCalendar';
import ImageCard from './ImageCard';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import AmenitiesCard from './AmenitiesCard';
import ProfileImageGallery from './ProfileImageGallery';
import BookingCard from './BookingCard';
import CustomCalendar from '../Calendar';
import './style/listing-profile.css';
import './style/calendar.css';

const ListingProfile = () => {
    const user = useSelector((state) => state.session.user);
    const listingState = useSelector((state) => state.listings.selected);
    const imagesState = useSelector((state) => state.listings.images);
    const reservations = useSelector((state) => Object.values(state.reservations.reservations))

    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selected, setSelected] = useState("");
    const [unavailable, setUnavailable] = useState("");
    const [guests, setGuests] = useState(1);
    const [checkout, setCheckOut] = useState(false);

    const { listingId } = useParams();

    // Uses custom functions to format incoming date information &
    // create an array which the calendar uses to block off unavailable days.
    let disabledDates;
    if (reservations.length) {
        let formatted = formatDbDate(reservations);
        disabledDates = createDisabledRange(formatted);
    }

    // Conditional steps to ensure variable availabiliy when
    // coming from "Your Listings"
    let listing;
    let images;
    let mainImage;
    if (listingState) listing = listingState[listingId];
    if (imagesState) images = Object.values(imagesState);
    if (images) mainImage = images[0];
    const secondaryImages = images?.slice(1, 5);

    const myRef = useRef(null);
    const dispatch = useDispatch();

    const executeScroll = () => myRef.current.scrollIntoView();

    const openModal = () => {
        setIsOpen(true);
        return;
    };

    const closeModal = () => {
        setIsOpen(false);
        return
    };

    const handleImageDelete = async (image) => {
        if (images?.length > 5) {
            await dispatch(deleteImage(image));
        };
        if (images?.length <= 5) {
            return alert('Listing must have a minimum of 5 photos.');
        };
    };

    useEffect(() => {
        dispatch(getListing(listingId));
        dispatch(getImages(listingId));
        dispatch(getReservations(listingId));
    }, [listingId, dispatch]);


    const handleDateUpdate = (dateArr) => {
        setStartDate(dateArr[0]);
        setEndDate(dateArr[1]);
    };

    const handleSelection = (date) => {
        let dateSplit = date[0].split('-');
        let firstDate = new Date(dateSplit[0], dateSplit[1], dateSplit[2])
        setSelected(firstDate)
    };

    const clearDates = () => {
        setSelected("");
        setUnavailable("");
        setStartDate("");
        setEndDate("");
        setCheckOut(false);
    };

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
        <div className='listing-profile-container'>

            {/* All images display modal */}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
            >
                {images?.map((image, i) => (
                    <ImageCard
                        key={i}
                        user={user}
                        image={image}
                        listing={listing}
                        handleImageDelete={handleImageDelete}
                    />
                ))}
            </Modal>

            {/* Top images */}
            <div>
                <p
                    style={{ fontFamily: 'CerealBd', fontSize: "35px", margin: "0px 0px 5px 0px" }}
                >
                    {listing?.title}
                </p>
                <p
                    style={{ fontFamily: 'CerealLight', fontSize: "20px", margin: "0px 0px 15px 0px" }}
                >
                    {listing?.city}, United States
                </p>
            </div>
            <ProfileImageGallery
                mainImage={mainImage}
                secondaryImages={secondaryImages}
                openModal={openModal}
            />

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
                    <CustomCalendar funcs={calendarFuncs} ref={myRef} disabledDates={disabledDates}/>
                    {/* <div ref={myRef} className='border-bottom'>
                        <p className='big-font sub-header'>Select Your Dates</p>
                        <Calendar tileDisabled={({ date, view }) =>
                            (view === 'month') && // Block day tiles only
                            disabledDates?.some(disabledDate =>
                                date.getFullYear() === disabledDate.getFullYear() &&
                                date.getMonth() === disabledDate.getMonth() &&
                                date.getDate() === disabledDate.getDate()
                            )}
                            returnValue="range"
                            onChange={(value, e) => handleDateUpdate(formatDateForCalendar(value))}
                            onClickDay={(value, e) => handleSelection(formatDate([value]))}
                            minDate={selected ? selected : new Date()}
                            maxDate={unavailable ? unavailable : null}
                            showDoubleView={true}
                            selectRange={true}
                            // defaultValue={startDate && endDate ? [new Date(startDate), new Date(endDate)] : null}
                        />
                        <p
                            className='big-font'
                            style={{cursor: "pointer", textDecoration: 'underline'}}
                            onClick={clearDates}
                        >
                            clear dates
                        </p>
                    </div> */}
                </div>
                <BookingCard
                    funcs={{guests, setGuests, checkout, setCheckOut}}
                    endDate={endDate}
                    startDate={startDate}
                    listing={listing}
                    executeScroll={executeScroll}
                />
            </div>
        </div>
    )
};

export default ListingProfile
