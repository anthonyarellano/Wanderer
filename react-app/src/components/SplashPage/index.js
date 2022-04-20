import { Link } from 'react-router-dom';
import './style/splash-page.css';

const SplashPage = () => {
    return (
        <div className="splash-page-container">
            <div className='splash-page-title unselectable'>wanderer</div>
            <div className='splash-page-desc unselectable'>a hub for wanderers and galabouts to find their next adventure</div>
            <div className='splash-page-subtitle unselectable'>enter</div>
            <div
                style={{
                    marginTop: "1%"
                }}
                className='flex'>
                <Link to={{ pathname: `https://github.com/badjub1es` }} target="_blank">
                    <img
                        style={{width: "70px", height: "70px", marginRight: "5%"}}
                        src={require('./style/images/github.png').default}></img>
                </Link>
                <Link to={{ pathname: `https://www.linkedin.com/in/antarellano/` }} target="_blank">
                    <img
                        style={{width: "70px", height: "70px", marginLeft: "5%"}}
                        src={require('./style/images/linkedin.png').default}></img>
                </Link>
            </div>
            <div className='technology-list'>
                ReactJS - Redux - Flask - PostgreSQL - SQLAlchemy - Google Maps API - Amazon S3 Buckets - Docker
            </div>
        </div>
    )
};

export default SplashPage;
