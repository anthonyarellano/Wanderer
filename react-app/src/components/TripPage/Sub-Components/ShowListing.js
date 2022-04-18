import { Link } from 'react-router-dom';

const ShowListing = ({id}) => {
    return (
        <Link to={`/listings/${id}`} target="_blank">
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
                        style={{
                            width: "20px",
                            height: "20px"
                        }}
                        src={require('../style/images/house.png').default} />
                    <p
                        style={{
                            marginLeft: "10px"
                        }}
                        className='small-font'>Show listing</p>
                </div>
                <div>
                    <img
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

export default ShowListing;
