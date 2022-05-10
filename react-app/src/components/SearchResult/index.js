import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initMapScript } from "../Utils/GoogleMapsAPI/scriptLoading";
import { useEffect, useState } from 'react';
import SearchMap from "../SearchMap";
import { searchListings } from "../../store/listings";

const SearchResult = () => {
    const { searchTerm, lat, lng } = useParams();
    const [mapsLoaded, setMapsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchListings(searchTerm))
        initMapScript()
            .then(() => setMapsLoaded(() => true));
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <div style={{width: "45%"}}>
                {/* loop through listings to create cards */}
                someting
            </div>
            <div
                style={{
                    width: "55%",
                    height: "100%",
                    overflow: 'hidden'
                }}>
                    {/* pass into search map information for creating markers */}
                {mapsLoaded && (
                    <SearchMap style={{width: "100%"}} lat={parseFloat(lat)} lng={parseFloat(lng)}/>
                )}
            </div>
        </div>
    )
};

export default SearchResult;
