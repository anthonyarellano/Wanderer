import './style/amenities.css';

const Amenities = () => {
    return (
        <div>
            <div>
                <p>Please select all amenities present in your location:</p>
            </div>
            <div className="amenities-grid-container">
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/ac.png').default} alt="ac"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/bbq.png').default} alt="bbq"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/dryer.png').default} alt="dryer"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/washer.png').default} alt="washer"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/fridge.png').default} alt="fridge"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/hairdryer.png').default} alt="hairdryer"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/kitchen.png').default} alt="kitchen"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/parking.png').default} alt="parking"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/pool.png').default} alt="pool"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/stove.png').default} alt="stove"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/tv.png').default} alt="tv"></img>
                </div>
                <div className="amenities-input">
                    <input type="checkbox"></input>
                    <img src={require('./style/images/wifi.png').default} alt="wifi"></img>
                </div>
            </div>
        </div>
    )
};

export default Amenities;
