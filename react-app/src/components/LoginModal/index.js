import Modal from 'react-modal';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';

const LoginModal = ({setIsOpen, modalIsOpen, form, setForm}) => {

    const closeModal = () => {
        setIsOpen(false);
        return
    }

    return (
        <Modal
            className='form-modal'
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            <div
                style={{
                    justifyContent: "center",
                    borderBottom: "1px solid #EAEAEA"
                }}
                className='flex big-font'>
                <p>Log in or Sign Up</p>
            </div>
            <div style={{ margin: "0% 3% 5% 3%" }}>
                <p
                    style={{ fontSize: "25px" }}
                    className='big-font'>Welcome to Wanderer</p>
                {form === 'login' ?
                    <LoginForm setIsOpen={setIsOpen} setForm={setForm} /> :
                    form === 'signup' ?
                        <SignUpForm setIsOpen={setIsOpen} setForm={setForm} /> : null}
            </div>
        </Modal>
    )
};

export default LoginModal;
