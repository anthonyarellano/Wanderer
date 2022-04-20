import { GoogleMap, Marker } from '@react-google-maps/api';

const Map = ({ lat, lng, style }) => {
    const center = {
        lat,
        lng
    }

    return (
        <GoogleMap  mapTypeId='satellite' center={center} zoom={18} mapContainerStyle={style ? { height: "90vh"} : {width: '1000px', height: "500px"}}>
            <Marker position={center}/>
        </GoogleMap>
    )
};

export default Map;
