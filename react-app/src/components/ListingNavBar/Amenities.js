const Amenities = () => {
    return (
        <div>
            <div>
                <p>Please select all amenities present in your location:</p>
            </div>
            <div className="amenities-grid-container">
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/svgexport-20.svg').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                </div>
            </div>
        </div>
    )
};

export default Amenities;
