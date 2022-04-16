import ListingNavBar from '../ListingNavBar';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './style/my-listing-card.css';

const MyListingCard = ({ listing }) => {
    const [editOn, setEditOn] = useState(false);
    const history = useHistory();

    let firstImage;
    if (listing?.images) firstImage = listing?.images[0]?.url.split('=index?')[0]

    let links;
    if (editOn) {
        links = (
            <ListingNavBar setEditOn={setEditOn} listing={listing} editEnable={true} />
        )
    } if (!editOn) {
        links = (
                <div className="listing-card-container">
                    <div className='flex'>
                        <div
                            style={{cursor: "pointer"}}
                            className="big-font"
                            onClick={() => history.push(`/listings/${listing?.id}`)}
                        >
                            <p>{listing?.title}</p>
                        </div>
                        <div style={{ marginLeft: "1%", cursor: "pointer" }} className='small-font'
                            onClick={() => setEditOn(true)}>
                            Edit
                        </div>
                        <div style={{ marginLeft: "1%", cursor: "pointer" }} className='small-font'>
                            Delete
                        </div>
                    </div>
                    <div className="flex small-font">
                        <div>
                            <img
                                alt="first"
                                src={firstImage}
                                style={{ height: "100px", width: "200px", objectFit: "cover" }} />
                        </div>
                        <div style={{ marginLeft: "40px" }}>
                            <p>{listing?.room_type} in {listing?.city}</p>
                            <p>{listing?.description}</p>
                        </div>
                    </div>
                </div>
        )
    }

    return (
        <>
            {links}
        </>
    )
};

export default MyListingCard;
