import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initMapScript } from "../Utils/GoogleMapsAPI/scriptLoading";
import { useEffect, useState } from 'react';
import { searchListings } from "../../store/listings";
import ListingCard from "../ViewListings/ListingCard";
import SearchMap from "../SearchMap";
import './style/search-result.css'

const SearchResult = () => {
    const storeListings = useSelector((state) => state.listings.listings);
    let listings;
    if (storeListings) {
        listings = Object.values(storeListings);
    }

    const { searchTerm, lat, lng } = useParams();
    const [mapsLoaded, setMapsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchListings(searchTerm))
        initMapScript()
            .then(() => setMapsLoaded(() => true));
    }, [dispatch, searchTerm])

    return (
        <div style={{ display: "flex" }}>
            <div className="search-result-container">
                {listings.length === 0 && (
                    <p
                        style={{
                            fontFamily: 'CerealBd'
                        }}
                        >No listings here yet . . .</p>
                )}
                {/* loop through listings to create cards */}
                {listings?.map((listing) => (
                    <ListingCard listing={listing}/>
                ))}
            </div>
            <div className="search-map-container">
                {mapsLoaded && (
                    <SearchMap
                        style={{width: "100%"}}
                        lat={parseFloat(lat)}
                        lng={parseFloat(lng)}
                        listings={listings}
                    />
                )}
            </div>
        </div>
    )
};

export default SearchResult;
