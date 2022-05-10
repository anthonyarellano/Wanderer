import { GoogleMap, Marker } from '@react-google-maps/api';
import './style/maps.css';

const SearchMap = ({ lat, lng, style }) => {

    const center = {
        lat,
        lng
    }

    return (
        <GoogleMap  mapTypeId='satellite' center={center} zoom={18} mapContainerStyle={style ? { height: "90vh"} : {width: '1000px', height: "500px"}}>
            <Marker
                icon={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
                label={
                    {
                        text: "what!",
                        className: 'marker-label'
                    }
                }
                position={center}/>
        </GoogleMap>
    )
};

export default SearchMap;
