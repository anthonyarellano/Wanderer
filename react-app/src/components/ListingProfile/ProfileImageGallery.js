const ProfileImageGallery = ({ mainImage, secondaryImages, openModal }) => {
    const style1 = {
        height: '100%', width: '100%', objectFit: "cover"
    };

    const style2 = {
        height: '100%', width: '100%', objectFit: "cover", borderRadius: "0px 10px 0px 0px"
    };

    const style3 = {
        height: '100%', width: '100%', objectFit: "cover", borderRadius: "0px 0px 10px 0px"
    };
    return (
        <div className='listing-profile-image-container'>
                <div className='listing-profile-main-image'>
                    <img alt='main' style={{ width: '100%', height: '100%', borderRadius: "10px 0px 0px 10px", objectFit: 'cover' }} src={mainImage?.url}></img>
                </div>
                <div className='listing-profile-secondary-images'>
                    {secondaryImages?.map((image, i) => (
                        <img alt={`url${i}`} className='image' style={i === 1 ? style2 : i === 3 ? style3 : style1} src={image?.url}></img>
                    ))}
                    <div
                        onClick={openModal}
                        className='show-all-photos big-font'
                    >
                        show all photos
                    </div>
                </div>
            </div>
    )
};

export default ProfileImageGallery;
