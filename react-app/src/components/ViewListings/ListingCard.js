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
                    <ListingCarouselCard img={image?.url} />
                ))}
            </Carousel>
            <div>
                text
            </div>
        </div>
    )
};

export default ListingCard;
