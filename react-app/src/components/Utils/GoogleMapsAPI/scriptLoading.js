export const loadAsyncScript = (src) => {
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

export const initMapScript = () => {
    if (window.google) {
        return Promise.resolve();
    }
    const src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    return loadAsyncScript(src);
}
