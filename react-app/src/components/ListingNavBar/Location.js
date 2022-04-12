import { useRef, useEffect } from 'react';

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

const Location = () => {

    const searchInput = useRef(null)

    const onChangeAddress = (autocomplete) => {
        const location = autocomplete.getPlace();
        console.log(location);
        console.log(location.geometry.location.lat());
        console.log(location.geometry.location.long());
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
        <div>
            <input ref={searchInput} type="text" ></input>
        </div>
    )
};

export default Location;
