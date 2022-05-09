import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createImages, createListing, updateListing } from '../../store/listings';
import AWS from 'aws-sdk';
import About from './About';
import Location from './Location';
import Amenities from './Amenities';
import Images from './Images';
import LoadingModal from '../LoadingModal';
import Compressor from 'compressorjs';
import './style/listing-navbar.css';

// S3 bucket config from environment variables.
const S3_BUCKET = process.env.REACT_APP_BUCKET;
const REGION = process.env.REACT_APP_REGION;

AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
});

const ListingNavBar = ({ listing, editEnable, setEditOn }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.session.user);
    const [progress, setProgress] = useState(null);
    const [active, setActive] = useState('About');
    const [aboutErrors, setAboutErrors] = useState([]);
    const [locationErrors, setLocationErrors] = useState([]);
    const [imageErrors, setImageErrors] = useState([]);
    const [amenityErrors, setAmenityErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    // objects to be used as props for validation css.
    const validated = {
        color: "green"
    };

    const notValid = {
        color: "red"
    };

    // States for 'about' form
    const [title, setTitle] = useState("");
    const [beds, setBeds] = useState("");
    const [baths, setBaths] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [guests, setGuests] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [type, setType] = useState("");

    // States for 'location' form
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
    const [address, setAddress] = useState(null);
    // console.log("lat ", lat, "long: ", long, "city: ", city, "state: ", state, "country: ", country, "address: ", address);
    // States for 'amenity' form
    const [wifi, setWifi] = useState(false);
    const [tv, setTv] = useState(false);
    const [kitchen, setKitchen] = useState(false);
    const [ac, setAc] = useState(false);
    const [pool, setPool] = useState(false);
    const [washer, setWasher] = useState(false);
    const [dryer, setDryer] = useState(false);
    const [hairDryer, setHairDryer] = useState(false);
    const [parking, setParking] = useState(false);
    const [fridge, setFridge] = useState(false);
    const [bbq, setBbq] = useState(false);
    const [stove, setStove] = useState(false);

    // State for 'image' form
    const [files, setFiles] = useState([]);

    // form validations
    useEffect(() => {
        let errors = [];
        let badChars = "1234567890@#$%^&*()_-+=][}{|:;/?><"
        if (title) {
            if (title.length > 255) errors.push('Please enter a title shorter than 255 characters.');
            title.split('').forEach((char) => {
                if (badChars.includes(char)) errors.push('Title contains unusable character.');
            });
        } if (!title) errors.push('Please enter a value for title.');

        if (beds) {
            if (beds % 1 !== 0) errors.push('Bed number must be a whole number.');
            if (beds < 1) errors.push('Please enter a value for number of beds greater than 0.');
            if (beds > 2147483646) errors.push('Please enter smaller value for number of beds.');
        } if (!beds) errors.push('Please enter a value for number of beds.');

        if (baths) {
            if (baths % 1 !== 0) errors.push('Bath number must be a whole number.');
            if (baths < 1) errors.push('Please enter a value for number of baths greater than 0.');
            if (baths > 2147483646) errors.push('Please enter smaller value for number of baths.');
        } if (!baths) errors.push('Please enter a value for number of baths.');

        if (bedrooms) {
            if (bedrooms % 1 !== 0) errors.push('Bedroom number must be a whole number.');
            if (bedrooms < 1) errors.push('Please enter a value for number of bedrooms greater than 0.');
            if (bedrooms > 2147483646) errors.push('Please enter smaller value for number of bedrooms.');
        } if (!bedrooms) errors.push('Please enter a value for number of bedrooms.');

        if (guests) {
            if (guests % 1 !== 0) errors.push('Guest number must be a whole number.');
            if (guests < 1) errors.push('Please enter a value for number of guests greater than 0.');
            if (guests > 2147483646) errors.push('Please enter smaller value for number of guests.');
        } if (!guests) errors.push('Please enter a value for number of guests.');

        if (price) {
            if (price % 1 !== 0) errors.push('Price must be a whole number.');
            if (price < 1) errors.push('Please enter a value for nightly price greater than 0.');
            if (price > 2147483646) errors.push('Please enter smaller value for nightly price.');
        } if (!price) errors.push('Please enter a value for nightly price.');

        if (description) {
            if (description.length > 2000) errors.push('Please keep description less than 2000 characters.')
        }
        if (!description) errors.push('Please enter a value for description.');

        if (!checkIn) errors.push('Please enter a check-in time.');

        if (!checkOut) errors.push('Please enter a check-out time.');

        if (!type) errors.push('Please select an accomodation type.');

        setAboutErrors(errors);
    }, [title, beds, baths, bedrooms,
        guests, price, description,
        checkIn, checkOut, type]);

    // location form validations
    useEffect(() => {
        let errors = new Set([]);
        if (!lat) errors.add('This location is not yet supported.');

        if (!long) errors.add('This location is not yet supported.');

        if (!city) errors.add('This location is not yet supported.');

        if (!address) errors.add('This location is not yet supported.');

        if (!state) errors.add('This location is not yet supported.');

        if (country) {
            if (country !== "United States") errors.add('We apologize, wanderer is only currently available in the United States.');
        } if (!country) errors.add('This location is not yet supported.');

        setLocationErrors(errors);
    }, [lat, long, city, address, country, state]);

    useEffect(() => {
        let errors = [];
        if (files?.length < 5 && !editEnable) errors.push('Please upload at least five image.')

        setImageErrors(errors);
    }, [files, editEnable]);

    // amenity validations
    useEffect(() => {
        let errors = [];
        let count = 0;
        let amenities = [wifi, tv, kitchen,
            ac, pool, washer,
            dryer, hairDryer, parking,
            fridge, bbq, stove];
        amenities.forEach((x) => {
            if (x === true) count++
        });
        if (count < 2) errors.push('Please select at least two amenities.');

        setAmenityErrors(errors);
    }, [wifi, tv, kitchen,
        ac, pool, washer,
        dryer, hairDryer, parking,
        fridge, bbq, stove]);

    // packaging of funcs into object to be passed as a prop into
    // invididual form components.
    const imagesFuncs = {
        files, setFiles
    };

    const amenitiesFuncs = {
        wifi, setWifi, tv, setTv,
        kitchen, setKitchen, ac, setAc,
        pool, setPool, washer, setWasher,
        dryer, setDryer, hairDryer, setHairDryer,
        parking, setParking, fridge, setFridge,
        bbq, setBbq, stove, setStove
    };

    const locationFuncs = {
        lat, setLat, long, setLong,
        city, setCity, address, setAddress,
        country, setCountry, state, setState
    };

    const aboutFuncs = {
        active, setActive, title, setTitle,
        beds, setBeds, baths, setBaths,
        bedrooms, setBedrooms, guests, setGuests,
        price, setPrice, description, setDescription,
        checkIn, setCheckIn, checkOut, setCheckOut,
        type, setType
    };

    const openModal = () => {
        setIsOpen(true);
        return;
    };

    // function for submitting to AWS S3 bucket.
    // eslint-disable-next-line
    const submitAWS = async (listingId, files, initialize) => {
        let fileUrls = [];
        if (files.length) {

            // opens loading modal while images are being uploaded.
            openModal()
            files.forEach((file, i) => {
                // runs each file through compressor.
                new Compressor(file, {
                    quality: 0.6,

                    success(result) {
                        const params = {
                                Body: result,
                                Bucket: S3_BUCKET,
                                Key: result.name
                            };
                            // upon successful compression, file uploaded to S3 bucket.
                            myBucket.upload(params)
                                .on('httpUploadProgress', (evt) => {
                                    setProgress(Math.round((evt.loaded / evt.total) * 100))
                                })
                                .send((err, data) => {
                                    if (err) return console.log((err));
                                    if (data) {
                                        // upon successful upload, URLs are indexed in upload order and pushed into array.
                                        fileUrls.push(`${data.Location}=index?${initialize ? i : listing?.images?.length + i}`);
                                        // once all the URLs are present, send them to database to be added to the database.
                                        // once images are present in the database, render completed listing's page.
                                        if (fileUrls.length === files.length) {
                                            dispatch(createImages(fileUrls, listingId))
                                                .then(() => history.push(`/listings/${listingId}`));
                                        };
                                    };
                                });
                    }
                });
            });
        };
    };

    // checks to see if form(s) are validated and ready for submission.
    let submitReady = false;
    if (![...locationErrors].length && !aboutErrors?.length && !imageErrors?.length && !amenityErrors?.length) submitReady = true;
    let editSubmitReady = false;
    if (!aboutErrors?.length && !imageErrors?.length && !amenityErrors?.length) editSubmitReady = true;

    // function for submitting a new listing to be created.
    const handleSubmit = async () => {
        setHasSubmitted(true);
        if (submitReady || editSubmitReady) {
            openModal()
            const listingInfo = {
                owner_id: user.id,
                title,
                bed_number: beds,
                bath_number: baths,
                bedroom_number: bedrooms,
                maximum_guests: guests,
                latitude: lat,
                longitude: long,
                city,
                price,
                state,
                address,
                description,
                wifi_avail: wifi,
                tv_avail: tv,
                kitchen_avail: kitchen,
                ac_avail: ac,
                washer_avail: washer,
                dryer_avail: dryer,
                hair_dryer_avail: hairDryer,
                parking_avail: parking,
                fridge_avail: fridge,
                bbq_avail: bbq,
                stove_avail: stove,
                pool_avail: pool,
                check_in: checkIn,
                check_out: checkOut,
                room_type_id: type,
            }
            // if this is not the edit form do this, if it is the edit form do this.
            if (!editEnable) {
                const newListing = await dispatch(createListing(listingInfo));
                let initialize = true;
                submitAWS(newListing.id, files, initialize);
            } if (editEnable) {
                await dispatch(updateListing(listingInfo, listing.id));
                if (files.length) {
                    submitAWS(listing.id, files)
                } else {
                    history.push(`/listings/${listing.id}`)
                };
            };
        };
    };

    // If editEnable prop is passed, change form into edit form by removing location tab.
    // Done for reusability of component.
    let links;
    if (!editEnable) {
        links = (
            <div className="link-container">
                <div className="links-list">
                    <div
                        style={aboutErrors?.length === 0 ? validated : hasSubmitted && aboutErrors?.length ? notValid : null}
                        className={active === 'About' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('About')}>
                        About the property
                    </div>
                    <div
                        style={[...locationErrors]?.length === 0 ? validated : hasSubmitted && [...locationErrors]?.length ? notValid : null}
                        className={active === 'Location' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Location')}>
                        Location
                    </div>
                    <div
                        style={amenityErrors?.length === 0 ? validated : hasSubmitted && amenityErrors?.length ? notValid : null}
                        className={active === 'Amenities' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Amenities')}>
                        Amenities
                    </div>
                    <div
                        style={imageErrors?.length === 0 ? validated : hasSubmitted && imageErrors?.length ? notValid : null}
                        className={active === 'Images' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Images')}>
                        Images
                    </div>
                    <div
                        style={submitReady ? { color: 'green', cursor: "pointer" } : { color: 'gray' }}
                        onClick={handleSubmit}>Submit {progress && `(${progress ? progress : ""})%`}
                    </div>
                </div>
            </div>
        )
    } if (editEnable) {
        links = (
            <div className="link-container">
                <div className="links-list">
                    <div
                        style={aboutErrors?.length === 0 ? validated : hasSubmitted && aboutErrors?.length ? notValid : null}
                        className={active === 'About' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('About')}>
                        About the property
                    </div>
                    <div
                        style={amenityErrors?.length === 0 ? validated : hasSubmitted && amenityErrors?.length ? notValid : null}
                        className={active === 'Amenities' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Amenities')}>
                        Amenities
                    </div>
                    <div
                        style={imageErrors?.length === 0 ? validated : hasSubmitted && imageErrors?.length ? notValid : null}
                        className={active === 'Images' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Images')}>
                        Add Images
                    </div>
                    <div
                        style={editSubmitReady ? { color: 'green', cursor: "pointer" } : { color: 'gray' }}
                        onClick={handleSubmit}>Submit {progress && `(${progress ? progress : ""})%`}
                    </div>
                    <div
                        style={{ marginLeft: "3%" }}
                        className='listing-nav-button'
                        onClick={() => setEditOn(false)}>
                        Cancel
                    </div>
                </div>
            </div>
        )
    }

    // Setting values on edit form
    useEffect(() => {
        if (editEnable && listing) {
            setTitle(listing?.title);
            setCheckIn(listing?.check_in);
            setCheckOut(listing?.check_out);
            setBeds(listing?.bed_number);
            setBaths(listing?.bath_number);
            setBedrooms(listing?.bedroom_number);
            setGuests(listing?.maximum_guests);
            setPrice(listing?.price);
            setDescription(listing?.description);
            setType(listing?.room_type_id);
            setAc(listing?.ac_avail);
            setBbq(listing?.bbq_avail);
            setWifi(listing?.wifi_avail);
            setTv(listing?.tv_avail);
            setKitchen(listing?.kitchen_avail);
            setWasher(listing?.washer_avail);
            setDryer(listing?.dryer_avail);
            setHairDryer(listing?.hair_dryer_avail);
            setParking(listing?.parking_avail);
            setFridge(listing?.fridge_avail);
            setStove(listing?.stove_avail);
            setPool(listing?.pool_avail);
        }
    }, [editEnable, listing])

    return (
        <>
            <LoadingModal modalIsOpen={modalIsOpen} />
            {links}
            <div style={{ marginLeft: "10%" }}>
                {/* rendering individual form component 'tab' utilizing useState */}
                {active === "About" ?
                    <About aboutErrors={aboutErrors} hasSubmitted={hasSubmitted} aboutFuncs={aboutFuncs} /> :
                    active === "Location" ?
                        <Location locationErrors={locationErrors} hasSubmitted={hasSubmitted} locationFuncs={locationFuncs} /> :
                        active === "Amenities" ?
                            <Amenities amenityErrors={amenityErrors} hasSubmitted={hasSubmitted} amenitiesFuncs={amenitiesFuncs} /> :
                            active === "Images" ?
                                <Images imageErrors={imageErrors} hasSubmitted={hasSubmitted} imagesFuncs={imagesFuncs} /> : null}
            </div>
        </>
    )
};

export default ListingNavBar;
