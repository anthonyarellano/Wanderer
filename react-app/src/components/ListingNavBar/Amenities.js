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
                <p
                    style={{fontFamily: "CerealLight", fontSize: "20px"}}
                    >Please select all amenities present in your location:</p>
            </div>
            <div className="amenities-grid-container">
                <div className="amenities-input">
                    <input checked={ac} type="checkbox" onChange={() => setAc(!ac)}></input>
                    <img src={require('./style/images/ac.png').default} alt="ac"></img>
                    <p className='amenity-text'>AC</p>
                </div>
                <div className="amenities-input">
                    <input checked={bbq} type="checkbox" onChange={() => setBbq(!bbq)}></input>
                    <img src={require('./style/images/bbq.png').default} alt="bbq"></img>
                    <p className='amenity-text'>BBQ</p>
                </div>
                <div className="amenities-input">
                    <input checked={dryer} type="checkbox" onChange={() => setDryer(!dryer)}></input>
                    <img src={require('./style/images/dryer.png').default} alt="dryer"></img>
                    <p className='amenity-text'>Dryer</p>
                </div>
                <div className="amenities-input">
                    <input checked={washer} type="checkbox" onChange={() => setWasher(!washer)}></input>
                    <img src={require('./style/images/washer.png').default} alt="washer"></img>
                    <p className='amenity-text'>Washer</p>
                </div>
                <div className="amenities-input">
                    <input checked={fridge} type="checkbox" onChange={() => setFridge(!fridge)}></input>
                    <img src={require('./style/images/fridge.png').default} alt="fridge"></img>
                    <p className='amenity-text'>Fridge</p>
                </div>
                <div className="amenities-input">
                    <input checked={hairDryer} type="checkbox" onChange={() => setHairDryer(!hairDryer)}></input>
                    <img src={require('./style/images/hairdryer.png').default} alt="hairdryer"></img>
                    <p className='amenity-text'>Hair Dryer</p>
                </div>
                <div className="amenities-input">
                    <input checked={kitchen} type="checkbox" onChange={() => setKitchen(!kitchen)}></input>
                    <img src={require('./style/images/kitchen.png').default} alt="kitchen"></img>
                    <p className='amenity-text'>Kitchen</p>
                </div>
                <div className="amenities-input">
                    <input checked={parking} type="checkbox" onChange={() => setParking(!parking)}></input>
                    <img src={require('./style/images/parking.png').default} alt="parking"></img>
                    <p className='amenity-text'>Free Parking</p>
                </div>
                <div className="amenities-input">
                    <input checked={pool} type="checkbox" onChange={() => setPool(!pool)}></input>
                    <img src={require('./style/images/pool.png').default} alt="pool"></img>
                    <p className='amenity-text'>Pool</p>
                </div>
                <div className="amenities-input">
                    <input checked={stove} type="checkbox" onChange={() => setStove(!stove)}></input>
                    <img src={require('./style/images/stove.png').default} alt="stove"></img>
                    <p className='amenity-text'>Stove</p>
                </div>
                <div className="amenities-input">
                    <input checked={tv} type="checkbox" onChange={() => setTv(!tv)}></input>
                    <img src={require('./style/images/tv.png').default} alt="tv"></img>
                    <p className='amenity-text'>TV</p>
                </div>
                <div className="amenities-input">
                    <input checked={wifi} type="checkbox" onChange={() => setWifi(!wifi)}></input>
                    <img src={require('./style/images/wifi.png').default} alt="wifi"></img>
                    <p className='amenity-text'>Wifi</p>
                </div>
            </div>
        </div>
    )
};

export default Amenities;
