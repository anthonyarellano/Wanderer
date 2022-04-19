import './style/location.css';
import Map from '../Map';
import { useRef, useEffect } from 'react';
import { initMapScript } from '../Utils/GoogleMapsAPI/scriptLoading';

const Location = ({ locationFuncs, hasSubmitted, locationErrors }) => {

    const {
        lat, setLat,
        long, setLong,
        setCity, setAddress,
        setCountry
    } = locationFuncs;

    const searchInput = useRef(null)

    const pullAddress = (place) => {
        const address ={
            city: "",
            state: "",
            zip: "",
            country: "",
            lat: "",
            long: "",
            streetNumber: "",
            street: ""
        }

        if (!Array.isArray(place?.address_components)) {
            return address;
        }

        address.lat = place?.geometry.location.lat();
        address.long = place?.geometry.location.lng();

        place.address_components.forEach(component => {
            const types = component.types;
            const value = component.long_name;

            if (types.includes("locality")) {
                address.city = value;
            };

            if (types.includes("administrative_area_level_1")) {
                address.state = value;
            };

            if (types.includes("postal_code")) {
                address.zip = value;
            };

            if (types.includes("country")) {
                address.country = value;
            };

            if (types.includes("street_number")) {
                address.streetNumber = value;
            };

            if (types.includes("route")) {
                address.street = value;
            };
        })
        return address;
    }

    const onChangeAddress = (autocomplete) => {
        const location = autocomplete.getPlace();
        const locationInfo = pullAddress(location);

        if (locationInfo) {
            setLat(locationInfo.lat);
            setLong(locationInfo.long);
            setCity(locationInfo.city);
            setCountry(locationInfo.country);
            setAddress(`${locationInfo.streetNumber}-${locationInfo.street}-${locationInfo.zip}`)
        }
    }

    const initAutoComplete = () => {
        if (!searchInput.current) return;

        const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
        autocomplete.setFields(["address_component", "geometry"]);
        autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete))
    }

    useEffect(() => {
        initMapScript().then(() => initAutoComplete())
        // eslint-disable-next-line
    }, [])

    return (
        <div className='maps-input-container'>
            {hasSubmitted && [...locationErrors]?.map((error) => (
                <p style={{fontFamily: 'CerealLight', color: 'red'}}>{error}</p>
            ))}
            <div>
                <input className="maps-input" ref={searchInput} placeholder='Begin searching...' type="text" ></input>
            </div>
            <div style={{marginTop: "3%"}}>
                {lat && long ?
                <Map lat={lat ? parseFloat(lat) : null} lng={long ? parseFloat(long) : null}/> : null}
            </div>
        </div>
    )
};

export default Location;
