import './style/banner.css';

export const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-logo-container">
                <div>
                <img
                    style={{height: "32px", width: "20px"}}
                    src={require("./style/images/wanderer-logo.png").default} alt=""></img>
                </div>
                <div className='banner-logo-text-container'>
                    <p className='banner-logo-text'>wanderer</p>
                </div>
            </div>
            <div>
                <input
                    placeholder='Start your search'
                    style={{width: "500px"}}
                    className='banner-search-bar'
                    type="text">
                </input>
            </div>

            <div className='banner-user-interface'>
                {/* Login + other buttons */}
                <div className='banner-user-interface-container'>
                    <div>
                        <img
                            style={{height: "20px", marginRight: "13px"}}
                            src={require('./style/images/three-lines.png').default}></img>
                    </div>
                    <div>
                        <img src={require('./style/images/user-image.png').default}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
