import './style/amenities.css';

const Amenities = ({amenitiesFuncs}) => {

    const {
        wifi, setWifi,
        tv, setTv,
        kitchen, setKitchen,
        ac, setAc,
        pool, setPool,
        washer, setWasher,
        dryer, setDryer,
        hairDryer, setHairDryer,
        parking, setParking,
        fridge, setFridge,
        bbq, setBbq,
        stove, setStove
    } = amenitiesFuncs;

    return (
        <div>
            <div>
                <p>Please select all amenities present in your location:</p>
            </div>
            <div className="amenities-grid-container">
                <div className="amenities-input">
                    <input checked={ac} type="checkbox" onChange={() => setAc(!ac)}></input>
                    <img src={require('./style/images/ac.png').default} alt="ac"></img>
                </div>
                <div className="amenities-input">
                    <input checked={bbq} type="checkbox" onChange={() => setBbq(!bbq)}></input>
                    <img src={require('./style/images/bbq.png').default} alt="bbq"></img>
                </div>
                <div className="amenities-input">
                    <input checked={dryer} type="checkbox" onChange={() => setDryer(!dryer)}></input>
                    <img src={require('./style/images/dryer.png').default} alt="dryer"></img>
                </div>
                <div className="amenities-input">
                    <input checked={washer} type="checkbox" onChange={() => setWasher(!washer)}></input>
                    <img src={require('./style/images/washer.png').default} alt="washer"></img>
                </div>
                <div className="amenities-input">
                    <input checked={fridge} type="checkbox" onChange={() => setFridge(!fridge)}></input>
                    <img src={require('./style/images/fridge.png').default} alt="fridge"></img>
                </div>
                <div className="amenities-input">
                    <input checked={hairDryer} type="checkbox" onChange={() => setHairDryer(!hairDryer)}></input>
                    <img src={require('./style/images/hairdryer.png').default} alt="hairdryer"></img>
                </div>
                <div className="amenities-input">
                    <input checked={kitchen} type="checkbox" onChange={() => setKitchen(!kitchen)}></input>
                    <img src={require('./style/images/kitchen.png').default} alt="kitchen"></img>
                </div>
                <div className="amenities-input">
                    <input checked={parking} type="checkbox" onChange={() => setParking(!parking)}></input>
                    <img src={require('./style/images/parking.png').default} alt="parking"></img>
                </div>
                <div className="amenities-input">
                    <input checked={pool} type="checkbox" onChange={() => setPool(!pool)}></input>
                    <img src={require('./style/images/pool.png').default} alt="pool"></img>
                </div>
                <div className="amenities-input">
                    <input checked={stove} type="checkbox" onChange={() => setStove(!stove)}></input>
                    <img src={require('./style/images/stove.png').default} alt="stove"></img>
                </div>
                <div className="amenities-input">
                    <input checked={tv} type="checkbox" onChange={() => setTv(!tv)}></input>
                    <img src={require('./style/images/tv.png').default} alt="tv"></img>
                </div>
                <div className="amenities-input">
                    <input checked={wifi} type="checkbox" onChange={() => setWifi(!wifi)}></input>
                    <img src={require('./style/images/wifi.png').default} alt="wifi"></img>
                </div>
            </div>
        </div>
    )
};

export default Amenities;
