import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = ({setIsOpen}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoLogin = async () => {
    await dispatch(login('demo@aa.io', 'password'));
    setIsOpen(false);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    if (!data) setIsOpen(false);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        <input
          style={{
            width: "96%",
            fontSize: "20px",
            borderRadius: "10px 10px 0px 0px"
          }}
          className='booking-availability-input small-font'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <input
          style={{
            width: "96%",
            fontSize: "20px",
            borderRadius: "0px 0px 10px 10px",
            borderTop: "0px"
          }}
          className='booking-availability-input small-font'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          cursor: "pointer"
        }}
        className='booking-availability-button'
        onClick={onLogin}>Login
      </div>
      <div
        style={{
          textAlign: "center",
          cursor: "pointer"
        }}
        className='booking-availability-button'
        onClick={demoLogin}>Demo</div>
        <div>
        {errors.map((error, ind) => (
          <div
            style={{padding: "10px"}}
            className='small-font'
            key={ind}>{error}</div>
        ))}
      </div>
    </form>
  );
};

export default LoginForm;
