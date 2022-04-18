const CarouselCard = ({image, i, host}) => {

    let title;
    if (i === 0) {
        title = (
            <div
                className="big-font"
                style={{
                        position: "absolute",
                        color: "white",
                        fontSize: "35px",
                        backgroundColor: "rgba(0, 0, 0, .3)",
                        height: "100%",
                        width: "100%"
                     }}>
                <p>
                    Your stay at {host}'s place
                </p>
            </div>
        )
    }
    return (
        <div style={{position: "relative"}}>
            {title}
            <img style={{height: "400px"}} src={image} />
        </div>
    )
};

export default CarouselCard;
