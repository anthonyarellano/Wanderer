import { useState } from 'react';
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

    // States for about form
    const [active, setActive] = useState('About');
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
        address, setAddress
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

    return (
        <>
            <div className="link-container">
                <div className="links-list">
                    <div
                        className={active === 'About' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('About')}>
                        About the property
                    </div>
                    <div
                        className={active === 'Location' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Location')}>
                        Location
                    </div>
                    <div
                        className={active === 'Amenities' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Amenities')}>
                        Amenities
                    </div>
                    <div
                        className={active === 'Images' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Images')}>
                        Images
                    </div>
                    <div onClick={testAWS}>Submit</div>
                </div>
            </div>
            <div style={{ marginLeft: "10%" }}>
                {active === "About" ?
                    <About aboutFuncs={aboutFuncs} /> :
                    active === "Location" ?
                        <Location locationFuncs={locationFuncs} /> :
                        active === "Amenities" ?
                            <Amenities amenitiesFuncs={amenitiesFuncs} /> :
                            active === "Images" ?
                                <Images imagesFuncs={imagesFuncs} /> : null}
            </div>
        </>
    )
};

export default ListingNavBar;
