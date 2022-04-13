import { GoogleMap, Marker } from '@react-google-maps/api';

const Map = ({lat, lng}) => {
    const center = {
        lat,
        lng
    }

    return (
        <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '1000px', height: "500px"}}>
            <Marker position={center}/>
        </GoogleMap>
    )
};

export default Map;
