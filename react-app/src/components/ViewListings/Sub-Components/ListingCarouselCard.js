const ListingCarouselCard = ({img}) => {
    const url = img.split('=index?')[0];

    return (
        <div>
            <img
                style={{
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "20px"
                }}
                src={url}></img>
        </div>
    )
};

export default ListingCarouselCard;
