import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory, useLocation } from 'react-router-dom';
import LoginModal from '../LoginModal';
import { initMapScript } from '../Utils/GoogleMapsAPI/scriptLoading';
import './style/banner.css';


export const Banner = () => {
    const user = useSelector((state) => state.session.user);

    const [visible, setVisible] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");


    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const searchInput = useRef(null)

    const onChangeAddress = (autocomplete) => {
        const location = autocomplete.getPlace();
        // const locationInfo = pullAddress(location);

        console.log(location);
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

    useEffect(() => {
        initMapScript().then(() => initAutoComplete())
        // eslint-disable-next-line
    }, [])

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

    const handleSearch = () => {

    }

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
            <div>
                <input
                    ref={searchInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            handleSearch(searchTerm)
                        }
                    }}
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
