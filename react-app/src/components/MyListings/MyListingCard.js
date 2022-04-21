import ListingNavBar from '../ListingNavBar';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style/my-listing-card.css';
import { deleteListing, getUserListings } from '../../store/listings';

const MyListingCard = ({ listing }) => {
    const user = useSelector((state) => state.session.user);
    const [editOn, setEditOn] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleListingDelete = async () => {
        const result = window.prompt(`Please enter: "${listing?.title}" to confirm delete.`)
        if (result === listing?.title) {
            await dispatch(deleteListing(listing?.id));
            await dispatch(getUserListings(user.id));
        }
        if (result !== listing?.title) return alert('Entry did not match. Please try again.')
    }

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
                            style={{cursor: "pointer", width: "75%", overflow: "clip"}}
                            className="big-font"
                            onClick={() => history.push(`/listings/${listing?.id}`)}
                        >
                            <p>{listing?.title}</p>
                        </div>
                        <div style={{ marginLeft: "1%", cursor: "pointer" }} className='small-font'
                            onClick={() => setEditOn(true)}>
                            Edit
                        </div>
                        <div style={{ marginLeft: "1%", cursor: "pointer" }} className='small-font'
                            onClick={() => handleListingDelete()}>
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
