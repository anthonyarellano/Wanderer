import { Carousel } from 'react-responsive-carousel';
import { militaryToStandard } from '../Utils/militaryToStandard';
import CarouselCard from './CarouselCard';
import GetDirections from './Sub-Components/GetDirections';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const YourStay = ({ reservation }) => {

    let checkIn;
    let checkOut;
    let startDate;
    let endDate;
    if (reservation) {
        checkIn = militaryToStandard(reservation?.check_in);
        checkOut = militaryToStandard(reservation?.check_out);
        startDate = reservation?.start_date.slice(0, 16);
        endDate = reservation?.end_date.slice(0, 16);
    }

    return (
        <div className='your-stay-container'>
            <Carousel
                showThumbs={false}
                showStatus={false}
                width="100%"
                style={{ color: "white" }}>
                {reservation?.image_list?.map((image, i) => (
                    <CarouselCard image={image} i={i} host={reservation?.host} />
                ))}
            </Carousel>
            <div
                style={{marginTop: "4%"}}
                className='flex'>
                <div
                    style={{
                        width: "50%",
                        marginLeft: "4%",
                        borderRight: "1px solid #DDDDDD"
                    }}>
                    <p className='big-font no-margin'>Check-in</p>
                    <p className='small-font no-margin'>{startDate}</p>
                    <p className='small-font no-margin'>{checkIn}</p>
                </div>
                <div style={{
                    width: "50%",
                    marginLeft: "5%"
                }}>
                    <p className='big-font no-margin'>Checkout</p>
                    <p className='small-font no-margin'>{endDate}</p>
                    <p className='small-font no-margin'>{checkOut}</p>
                </div>
            </div>
            <GetDirections lat={reservation?.lat} lng={reservation?.lng}/>
        </div>
    )
};

export default YourStay;
