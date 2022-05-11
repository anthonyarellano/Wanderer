import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import './style/maps.css';

const SearchMap = ({ lat, lng, style, listings }) => {

    const center = {
        lat: parseFloat(listings[0]?.latitude),
        lng: parseFloat(listings[0]?.longitude)
    }
    console.log(listings);
    return (
        <>
            <GoogleMap mapTypeId='satellite' center={center} zoom={11} mapContainerStyle={style ? { height: "90vh" } : { width: '1000px', height: "500px" }}>
                {listings?.map((listing) => (
                    <Marker
                        // icon={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
                        label={
                            {
                                text: `${listing?.price}`,
                                className: 'marker-label',
                                fontFamily: 'CerealBd'
                            }
                        }
                        position={{ lat: parseFloat(listing.latitude), lng: parseFloat(listing.longitude) }}
                    />
                ))}
                {/* <Marker
                        // generates a blank icon
                        icon={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
                        label={
                            {
                                // TODO string interpolated nightly cost
                                text: `$54`,
                                className: 'marker-label'
                            }
                        }
                        position={center} /> */}
            </GoogleMap>
        </>
    )
};

export default SearchMap;
