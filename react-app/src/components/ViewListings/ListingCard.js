import { Carousel } from 'react-responsive-carousel';
import ListingCarouselCard from './Sub-Components/ListingCarouselCard';

const ListingCard = ({ listing }) => {
    return (
        <div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                width={"300px"}>
                {listing?.images?.map((image) => (
                    <ListingCarouselCard img={image} />
                ))}
            </Carousel>
            <div
                style={{
                    justifyContent: 'space-between',
                    marginTop: "10px"
                }}
                className='flex'>
                <div
                    style={{fontSize: "15px"}}
                    className='big-font'>
                    {listing?.city}, {listing?.state}
                </div>
                <div
                    style={{fontSize: "15px"}}
                    className='small-font'>
                    ${listing?.price} night
                </div>
            </div>
        </div>
    )
};

export default ListingCard;
