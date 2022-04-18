import { Link } from 'react-router-dom';

const GetDirections = ({ lat, lng }) => {
    return (
        <Link to={{ pathname: `https://maps.google.com/?q=${lat},${lng}` }} target="_blank">
            <div
                style={{
                    justifyContent: "space-between",
                    cursor: "pointer"
                }}
                className='flex'>
                <div className='flex'>
                    <img
                        style={{
                            width: "20px",
                            height: "20px"
                        }}
                        src={require('../style/images/pin.png').default} />
                    <p>Get Directions</p>
                </div>
                <div>
                    arrow
                </div>
            </div>
        </Link>
    )
};

export default GetDirections;
