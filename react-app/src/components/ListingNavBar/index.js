import { useState } from 'react';
import './style/listing-navbar.css'; 

const ListingNavBar = () => {
    const [active, setActive] = useState('About')
    return (
        <>
            <div className="link-container">
                <div className="links-list">
                    <div
                        className={active === 'About' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('About')}>
                        About the property
                    </div>
                    <div
                        className={active === 'Location' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Location')}>
                        Location
                    </div>
                    <div
                        className={active === 'Amenities' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Amenities')}>
                        Amenities
                    </div>
                    <div
                        className={active === 'Images' ? 'listing-nav-button selected' : 'listing-nav-button'}
                        onClick={() => setActive('Images')}>
                        Images
                    </div>
                </div>
            </div>
            {active === "About" ?
            <p>About</p> :
            active === "Location" ?
            <p>Location</p> :
            active === "Amenities" ?
            <p>Amenities</p> :
            active === "Images" ?
            <p>Images</p> : null}
        </>
    )
};

export default ListingNavBar;
