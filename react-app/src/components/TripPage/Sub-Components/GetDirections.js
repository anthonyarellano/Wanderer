import { Link } from 'react-router-dom';

const GetDirections = ({ lat, lng }) => {
    return (
        <Link to={{ pathname: `https://maps.google.com/?q=${lat},${lng}` }} target="_blank">
            <div
                style={{
                    justifyContent: "space-between",
                    cursor: "pointer",
                    borderTop: "1px solid #DDDDDD",
                    margin: "20px 20px 0px 20px"
                }}
                className='flex'>
                <div className='flex'>
                    <img
                        alt="pin"
                        style={{
                            width: "20px",
                            height: "20px"
                        }}
                        src={require('../style/images/pin.png').default} />
                    <p
                        style={{
                            marginLeft: "10px"
                        }}
                        className='small-font'>Get directions</p>
                </div>
                <div>
                    <img
                        alt="arrow"
                        style={{
                            width: "15px",
                            height: "15px"
                        }}
                        src={require('../style/images/arrow.png').default} />
                </div>
            </div>
        </Link>
    )
};

export default GetDirections;
