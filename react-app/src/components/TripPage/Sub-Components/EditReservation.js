import { useState } from 'react';
import Modal from 'react-modal';

const EditReservation = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        return;
    }

    const closeModal = () => {
        setIsOpen(false);
        return
    }

    return (
        <>
            <Modal
                style={{content: {top: "50%", left: "25%"}}}
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                {/* modal calendar content */}
            </Modal>
            <div
                onClick={() => setIsOpen(true)}
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
                        src={require('../style/images/edit.png').default} />
                    <p
                        style={{
                            marginLeft: "10px"
                        }}
                        className='small-font'>Edit reservation</p>
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
        </>
    )
};

export default EditReservation;
