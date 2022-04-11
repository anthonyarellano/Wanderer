import './style/banner.css';

export const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-logo-container">
                <div>
                <img
                    style={{height: "32px", width: "20px"}}
                    src={require("./style/wanderer-logo.png").default} alt=""></img>
                </div>
                <div className='banner-logo-text-container'>
                    <p className='banner-logo-text'>wanderer</p>
                </div>
            </div>
            <div>
                {/* Search */}
                <input
                    style={{width: "500px"}}
                    className='banner-search-bar'
                    type="text">
                </input>
            </div>

            <div className='login'>
                {/* Login + other buttons */}
                <div>Login</div>
            </div>
        </div>
    )
}

export default Banner;
