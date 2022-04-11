import './style/banner.css';

export const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-logo-container">
                <div>
                <img
                    style={{height: "28px", width: "16px"}}
                    src={require("./style/wanderer-logo.png").default} alt=""></img>
                </div>
                <div className='banner-logo-text-container'>
                    <p className='banner-logo-text'>wanderer</p>
                </div>
            </div>

            <div>
                {/* Search */}
            </div>

            <div>
                {/* Login + other buttons */}
            </div>
        </div>
    )
}

export default Banner;
