import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory, useLocation } from 'react-router-dom';
import { initMapScript } from '../Utils/GoogleMapsAPI/scriptLoading';
import LoginModal from '../LoginModal';
import './style/banner.css';


export const Banner = () => {
    const user = useSelector((state) => state.session.user);

    const [visible, setVisible] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState(null);

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const searchInput = useRef(null)

    const pullAddress = (place) => {
        const address = {
            city: "",
            state: "",
        }

        if (!Array.isArray(place?.address_components)) {
            return address;
        }

        address.lat = place?.geometry.location.lat();
        address.long = place?.geometry.location.lng();

        place.address_components.forEach(component => {
            const types = component.types;
            const value = component.long_name;

            if (types.includes("locality")) {
                address.city = value;
            };

            if (types.includes("administrative_area_level_1")) {
                if (value === "New York") {
                    address.city = "NY"
                }
                address.state = value;
            };
        })
        return address;
    }

    const onChangeAddress = (autocomplete) => {
        const location = autocomplete.getPlace();
        const locationInfo = pullAddress(location);

        if (locationInfo) {
            const searchTerm = `${locationInfo.city.split(" ").join("=")}-${locationInfo.state.split(" ").join("=")}`
            history.push(`/s/${searchTerm}/${locationInfo.lat}/${locationInfo.long}`)
        }
    }

    const initAutoComplete = () => {
        if (!searchInput.current) return;

        const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current, {
            types: ['(cities)'],
            componentRestrictions: {country: "us"}
        });
        autocomplete.setFields(["address_component", "geometry"]);
        autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete))
    }

    initMapScript().then(() => initAutoComplete())
    // useEffect(() => {
    //     // eslint-disable-next-line
    // }, [])

    const openModal = () => {
        setIsOpen(true);
        return;
    }

    const loginModal = () => {
        openModal();
        setForm('login');
    }

    const signUpModal = () => {
        openModal();
        setForm('signup');
    }

    const onLogout = async (e) => {
        await dispatch(logout());
    };


    // conditionally render contents of user popout div according
    // to authorization status of user
    let links;
    if (user) {
        links = (
            <>
                <div>
                    <p
                        className='popout-item'
                        onClick={() => history.push('/my-trips')}
                        >
                        Trips
                    </p>
                </div>
                <div>
                    <p className='popout-item'>Wishlist (coming soon)</p>
                </div>
                <div style={{ borderTop: "1px solid #DEDEDE" }}>
                    <div>
                        <p className='popout-item'
                            onClick={() => history.push('/create-listing')}
                            >
                            Host your home
                        </p>
                    </div>
                    <div>
                        <p className='popout-item'
                            onClick={() => history.push('/my-listings')}
                            >
                            Your listings
                        </p>
                    </div>
                </div>
                <div style={{ borderTop: "1px solid #DEDEDE" }}>
                    <div>
                        <p
                            className='popout-item'
                            onClick={onLogout}>Log out</p>
                    </div>
                </div>
            </>
        )
    } if (!user) {
        links = (
            <>
                <div>
                    <p
                        className='popout-item'
                        onClick={loginModal}>Log in</p>
                </div>
                <div>
                    <p
                        className='popout-item'
                        onClick={signUpModal}>Sign up</p>
                </div>
            </>
        )
    }

    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className="banner-container">
            <div className="banner-logo-container">
                <div>
                    <img
                        style={{ height: "32px", width: "20px" }}
                        src={require("./style/images/wanderer-logo.png").default} alt="logo"></img>
                </div>
                <div
                    style={{cursor: "pointer"}}
                    className='banner-logo-text-container'
                    onClick={() => history.push('/home')}>
                    <p className='banner-logo-text'>wanderer</p>
                </div>
            </div>
            <div className='banner-search-container'>
                <input
                    ref={searchInput}
                    placeholder='Start your search'
                    style={{ width: "500px"}}
                    className='banner-search-bar'
                    type="text">
                </input>
            </div>

            <div
                className='banner-user-interface'
                onClick={() => setVisible(!visible)}>
                <div className='banner-user-interface-container'>
                    <div>
                        <img
                            style={{ height: "20px", marginRight: "13px" }}
                            src={require('./style/images/three-lines.png').default} alt="threelines"></img>
                    </div>
                    <div>
                        <img
                            style={{width: "32px", height: "32px", borderRadius: "100%"}}
                            src={user?.picture ? user?.picture : require('./style/images/user-image.png').default} alt="userpic"></img>
                    </div>
                </div>
                {/* user interface popout div */}
                <div className={visible ? 'user-interface-popout font' : 'hidden'}>
                    {links}
                </div>
            </div>
            <LoginModal form={form} setForm={setForm} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default Banner;
