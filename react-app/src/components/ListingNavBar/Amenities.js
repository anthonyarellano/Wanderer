const Amenities = () => {
    return (
        <div>
            <div>
                <p>Please select all amenities present in your location:</p>
            </div>
            <div className="amenities-grid-container">
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/ac.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/bbq.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/dryer.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/washer.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/fridge.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/hairdryer.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/kitchen.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/parking.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/pool.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/stove.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/tv.png').default}></img>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <img src={require('./style/images/wifi.png').default}></img>
                </div>
            </div>
        </div>
    )
};

export default Amenities;
