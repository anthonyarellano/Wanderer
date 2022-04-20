import './style/home-page.css';

const HomePage = () => {
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
                        <p className='home-page-sub-text'>
                            I'm flexible
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;
