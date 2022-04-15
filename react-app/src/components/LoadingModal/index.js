import Modal from 'react-modal';
import './style/loading-modal.css';

const LoadingModal = ({ modalIsOpen }) => {
    return (
        <>
            <Modal
                 ariaHideApp={false}
                 isOpen={modalIsOpen}>
                     <div>
                         <div className='loadinggif-logo-container'>
                            <img src={require('./style/loader/Preloader_1.gif').default} alt="loading"></img>
                            <p>wanderer</p>
                         </div>
                        <p style={{fontFamily: "CerealBd", fontSize: "30px"}}>We are creating your listing . . .</p>
                        <p style={{fontFamily: "CerealBd", fontSize: "30px"}}>Tips for new hosts</p>
                        <p className='modal-host-tip'>1 - Make your listing stand out, but be honest and truthful. </p>
                        <p className='modal-host-tip'>2 - Set up clear rules.</p>
                        <p className='modal-host-tip'>3 - Make sure the time between bookings is reasonable.</p>
                        <p className='modal-host-tip'>4 - Work hard to get Super Host status.</p>
                        <p className='modal-host-tip'>5 - Never take communications outside of the wanderer app.</p>
                        <p className='modal-host-tip'>6 - Be thoughtful, a small detail can go a long way.</p>
                     </div>
            </Modal>
        </>
    )
};

export default LoadingModal;
