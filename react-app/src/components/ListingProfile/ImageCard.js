const ImageCard = ({ image, handleImageDelete, user, listing }) => {
    return (
        <div style={{ position: "relative" }}>
            <img
                alt="profile"
                style={{ width: '500px', height: '300px', objectFit: "cover" }}
                src={image?.url}>
            </img>
            <div
                id={image?.id}
                onClick={() => handleImageDelete(image)}
                className={listing?.owner_id === user?.id ? 'big-font' : 'hidden'}
                style={{
                    position: "absolute", top: "5%", left: "2%",
                    backgroundColor: "white", padding: "5px", borderRadius: "10px",
                    cursor: "pointer"
                }}>
                Delete
            </div>
        </div>
    )
};

export default ImageCard;
