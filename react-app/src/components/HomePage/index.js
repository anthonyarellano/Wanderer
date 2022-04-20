import { useHistory } from 'react-router-dom';
import './style/home-page.css';

const HomePage = () => {
    const history = useHistory();

    return (
        <div className="home-page-container">
            <div className='home-page-cabin-container'>
                <div>
                    <img
                        className='home-page-image'
                        alt="cabin"
                        src={require('./style/images/cabin.jpeg').default} />
                </div>
                <div className='home-page-text-container'>
                    <p className='home-page-text'>Let your curiosity do the booking</p>
                    <div className='home-page-sub-text-container'>
                        <p
                            onClick={() => history.push('/view-listings')}
                            className='home-page-sub-text'>
                            View listings
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;
