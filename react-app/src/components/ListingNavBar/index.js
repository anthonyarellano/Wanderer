import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import About from './About';
import Location from './Location';
import Amenities from './Amenities';
import Images from './Images';
import './style/listing-navbar.css';


const S3_BUCKET = process.env.REACT_APP_BUCKET;
const REGION = process.env.REACT_APP_REGION;

AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})

const ListingNavBar = () => {
    const [progress, setProgress] = useState(null);
    const [active, setActive] = useState('About');
    const [aboutErrors, setAboutErrors] = useState([]);
    const [locationErrors, setLocationErrors] = useState([]);
    const [imageErrors, setImageErrors] = useState([]);
    const [amenityErrors, setAmenityErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const validated = {
        color: "green"
    };

    // States for about form
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

    // States for location form
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [address, setAddress] = useState(null);

    // States for amenity form
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

    // State for image form
    const [files, setFiles] = useState([]);

    // form validations
    useEffect(() => {
        let errors = [];
        let badChars = "1234567890@#$%^&*()_-+=][}{|:;/?><"
        if (title) {
            if (title.length > 255) errors.push('Please enter a title shorter than 255 characters.');
            title.split('').forEach((char) => {
                if (badChars.includes(char)) errors.push('Title contains unusable character.')
            })
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

        if (!description) errors.push('Please enter a value for description.');

        if (!checkIn) errors.push('Please enter a check-in time.');

        if (!checkOut) errors.push('Please enter a check-out time.');

        if (!type) errors.push('Please select an accomodation type.');

        setAboutErrors(errors);
    }, [title, beds, baths, bedrooms,
        guests, price, description,
        checkIn, checkOut, type])

    // location form validations
    useEffect(() => {
        let errors = [];
        if (!lat) errors.push('Please select a location.');

        if (!long) errors.push('Please select a location.');

        if (!city) errors.push('Please select a location.');

        if (!address) errors.push('Please select a location.');

        if (country) {
            if (country !== "United States") errors.push('We apologize, wanderer is only currently available in the United States.')
        } if (!country) errors.push('Please select a location.');

        setLocationErrors(errors);
    }, [lat, long, city, address, country])

    useEffect(() => {
        let errors = [];
        console.log(files);
        if (!files.length) errors.push('Please upload at least one image.')

        setImageErrors(errors);
    }, [files])

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
        fridge, bbq, stove])

    const imagesFuncs = {
        files, setFiles
    }

    const amenitiesFuncs = {
        wifi, setWifi,
        tv, setTv,
        kitchen, setKitchen,
        ac, setAc,
        pool, setPool,
        washer, setWasher,
        dryer, setDryer,
        hairDryer, setHairDryer,
        parking, setParking,
        fridge, setFridge,
        bbq, setBbq,
        stove, setStove
    }

    const locationFuncs = {
        lat, setLat,
        long, setLong,
        city, setCity,
        address, setAddress,
        country, setCountry
    }

    const aboutFuncs = {
        active, setActive,
        title, setTitle,
        beds, setBeds,
        baths, setBaths,
        bedrooms, setBedrooms,
        guests, setGuests,
        price, setPrice,
        description, setDescription,
        checkIn, setCheckIn,
        checkOut, setCheckOut,
        type, setType
    }

    const testAWS = () => {
        console.log(files);
        if (files.length > 0) {
            files.forEach((file) => {
                const params = {
                    Body: file,
                    Bucket: S3_BUCKET,
                    Key: file.name
                  };
                  myBucket.upload(params)
                    .on('httpUploadProgress', (evt) => {
                        setProgress(Math.round((evt.loaded / evt.total) * 100))
                    })
                    .send((err, data) => {
                        if (err) return console.log((err));;
                        if (data) return (console.log(data));
                    })
            })
        }
    }

    let submitReady = false;
    if (!locationErrors.length && !aboutErrors?.length && !imageErrors?.length) submitReady = true;

    return (
        <>
            <div className="link-container">
                <div className="links-list">
                    <div
                        style={aboutErrors?.length === 0 ? validated : null}
                        className={active === 'About' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('About')}>
                        About the property
                    </div>
                    <div
                        style={locationErrors?.length === 0 ? validated : null}
                        className={active === 'Location' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Location')}>
                        Location
                    </div>
                    <div
                        style={amenityErrors?.length === 0 ? validated : null}
                        className={active === 'Amenities' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Amenities')}>
                        Amenities
                    </div>
                    <div
                        style={imageErrors?.length === 0 ? validated : null}
                        className={active === 'Images' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Images')}>
                        Images
                    </div>
                    <div
                        style={submitReady ? {color: 'green', cursor: "pointer"} : {color: 'gray'}}
                        onClick={() => setHasSubmitted(true)}>Submit</div>
                </div>
            </div>
            <div style={{ marginLeft: "10%" }}>
                {active === "About" ?
                    <About hasSubmitted={hasSubmitted} aboutErrors={aboutErrors} aboutFuncs={aboutFuncs} /> :
                    active === "Location" ?
                        <Location locationErrors={locationErrors} locationFuncs={locationFuncs} /> :
                        active === "Amenities" ?
                            <Amenities amenityErrors={amenityErrors} hasSubmitted={hasSubmitted} amenitiesFuncs={amenitiesFuncs} /> :
                            active === "Images" ?
                                <Images imagesFuncs={imagesFuncs} /> : null}
            </div>
        </>
    )
};

export default ListingNavBar;
