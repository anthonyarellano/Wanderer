import './style/my-listing-card.css';

const MyListingCard = ({ listing }) => {

    let firstImage;
    if (listing?.images) firstImage = listing?.images[0]?.url.split('=index?')[0]

    return (
        <div className="listing-card-container">
            <div className='flex'>
                <div className="big-font">
                    <p>{listing?.title}</p>
                </div>
                <div>
                    Edit
                </div>
                <div>
                    Delete
                </div>
            </div>
            <div className="flex small-font">
                <div>
                    <img style={{height: "100px", width: "200px", objectFit: "cover"}} src={firstImage} />
                </div>
                <div style={{marginLeft: "40px"}}>
                    <p>{listing?.room_type} in {listing?.city}</p>
                    <p>{listing?.description}</p>
                </div>
            </div>
        </div>
    )
};

export default MyListingCard;
