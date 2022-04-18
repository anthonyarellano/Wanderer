const DeleteReservation = () => {
    return (
        <div
            style={{
                justifyContent: "space-between",
                cursor: "pointer",
                borderTop: "1px solid #DDDDDD",
                margin: "1px 20px 20px 20px"
            }}
            className='flex'>
            <div className='flex'>
                <img
                    alt="house"
                    style={{
                        width: "20px",
                        height: "20px"
                    }}
                    src={require('../style/images/delete.png').default} />
                <p
                    style={{
                        marginLeft: "10px"
                    }}
                    className='small-font'>Cancel reservation</p>
            </div>
            <div>
                <img
                    alt="arrow"
                    style={{
                        width: "15px",
                        height: "15px"
                    }}
                    src={require('../style/images/arrow.png').default} />
            </div>
        </div>
    )
};

export default DeleteReservation;
