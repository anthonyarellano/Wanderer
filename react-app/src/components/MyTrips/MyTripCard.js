import { formatDbDate } from "../Utils/formatDbDate";

const MyTripCard = ({ reservation }) => {
    const url = reservation?.listing_image?.url.split('=index?')[0];
    const date = {
        start_date: reservation?.start_date,
        end_date: reservation?.end_date
    }
    let formattedDate;
    let displayDate1;
    let displayDate2;
    if (date) {
        formattedDate = formatDbDate([date])
        let date1 = formattedDate[0][0].split('-')
        let date2 = formattedDate[0][1].split('-');
        console.log(date1, date2);
        displayDate1 = date1[1] + "-" + date1[2];
        displayDate2 = date2[1] + "-" + date2[2];
    }

    return (
        <div style={{
            marginBottom: "50px"
        }}
            className="flex">
            <div>
                <img
                    style={{
                        width: "72px",
                        height: "72px",
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                    src={url}/>
            </div>
            <div style={{
                margin: "0px 100px 0px 15px"
            }}>
                <div className="big-font">
                    {reservation?.city}
                </div>
                <div
                    style={{
                        color: "#717171",
                        fontSize: "13px"
                    }}
                    className="small-font">
                    Hosted by {reservation?.host}
                </div>
                <div
                    style={{
                        color: "#717171",
                        fontSize: "13px"
                    }}
                    className="small-font">
                    {displayDate1} - {displayDate2}
                </div>
            </div>
        </div>
    )
};

export default MyTripCard;
