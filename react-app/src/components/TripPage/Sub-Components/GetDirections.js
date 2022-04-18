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
                    <p>hi</p>
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
