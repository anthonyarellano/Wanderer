import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import ListingCard from '../ViewListings/ListingCard';
import './style/maps.css';

const SearchMap = ({ style, listings }) => {
    const [selectedListing, setSelectedListing] = useState(null);

    const center = {
        lat: parseFloat(listings[0]?.latitude),
        lng: parseFloat(listings[0]?.longitude)
    }
  
    return (
        <>
            <GoogleMap mapTypeId='satellite' center={center} zoom={11} mapContainerStyle={style ? { height: "90vh" } : { width: '1000px', height: "500px" }}>
                {listings?.map((listing) => (
                    <Marker
                        icon={"https://tonesbucket.s3.amazonaws.com/pin3.png"}
                        onClick={() => setSelectedListing(listing)}
                        label={
                            {
                                text: `$${listing?.price}`,
                                className: 'marker-label',
                                fontFamily: 'CerealBd'
                            }
                        }
                        position={{ lat: parseFloat(listing.latitude), lng: parseFloat(listing.longitude) }}
                    />
                ))}
                {selectedListing && (
                    <InfoWindow
                        onCloseClick={() => setSelectedListing(null)}
                        position={{
                            lat: parseFloat(selectedListing.latitude),
                            lng: parseFloat(selectedListing.longitude)
                        }}>
                        <ListingCard listing={selectedListing}/>
                    </InfoWindow>
                )}
            </GoogleMap>
        </>
    )
};

export default SearchMap;
