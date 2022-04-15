import './style/amenities-card.css';

const AmenitiesCard = ({ listing }) => {

    return (
        <div>
            <div className="amenities-display-grid-container">
                <div className={listing?.ac_avail ? 'amenities-input' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/ac.png').default} alt="ac"></img>
                    <p className='amenity-text'>AC</p>
                </div>
                <div className={listing?.bbq_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/bbq.png').default} alt="bbq"></img>
                    <p className='amenity-text'>BBQ</p>
                </div>
                <div className={listing?.dryer_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/dryer.png').default} alt="dryer"></img>
                    <p className='amenity-text'>Dryer</p>
                </div>
                <div className={listing?.washer_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/washer.png').default} alt="washer"></img>
                    <p className='amenity-text'>Washer</p>
                </div>
                <div className={listing?.fridge_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/fridge.png').default} alt="fridge"></img>
                    <p className='amenity-text'>Fridge</p>
                </div>
                <div className={listing?.hair_dryer_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/hairdryer.png').default} alt="hairdryer"></img>
                    <p className='amenity-text'>Hair Dryer</p>
                </div>
                <div className={listing?.kitchen_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/kitchen.png').default} alt="kitchen"></img>
                    <p className='amenity-text'>Kitchen</p>
                </div>
                <div className={listing?.parking_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/parking.png').default} alt="parking"></img>
                    <p className='amenity-text'>Free Parking</p>
                </div>
                <div className={listing?.pool_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/pool.png').default} alt="pool"></img>
                    <p className='amenity-text'>Pool</p>
                </div>
                <div className={listing?.stove_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/stove.png').default} alt="stove"></img>
                    <p className='amenity-text'>Stove</p>
                </div>
                <div className={listing?.tv_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/tv.png').default} alt="tv"></img>
                    <p className='amenity-text'>TV</p>
                </div>
                <div className={listing?.wifi_avail ? 'amenities-display' : 'hidden'}>
                    <img src={require('../ListingNavBar/style/images/wifi.png').default} alt="wifi"></img>
                    <p className='amenity-text'>Wifi</p>
                </div>
            </div>
        </div>

    )
};

export default AmenitiesCard;
