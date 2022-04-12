import { useEffect } from "react"
import { useRef } from "react"
import ListingNavBar from "../ListingNavBar";


const loadAsyncScript = (src) => {
    return new Promise(resolve => {
        const script = document.createElement("script");
        Object.assign(script, {
            type: "text/javascript",
            async: true,
            src
        })
        script.addEventListener("load", () => resolve(script));
        document.head.appendChild(script);
    })
}

const initMapScript = () => {
    if (window.google) {
        return Promise.resolve();
    }
    const src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    return loadAsyncScript(src);
}

const ListingForm = () => {
    const searchInput = useRef(null)

    const onChangeAddress = (autocomplete) => {
        const location = autocomplete.getPlace();
        console.log(location);
    }

    const initAutoComplete = () => {
        if (!searchInput.current) return;

        const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
        autocomplete.setFields(["address_component", "geometry"]);
        autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete))
    }

    useEffect(() => {
        initMapScript().then(() => initAutoComplete())
    }, [])

    return (
        <div>
            <div>
                <h1>Open your door to hosting</h1>
            </div>
            <div>
                {/* insert image or slide images */}
            </div>
            <ListingNavBar />
            <input ref={searchInput} type="text" ></input>
        </div>
    )
};

export default ListingForm;
