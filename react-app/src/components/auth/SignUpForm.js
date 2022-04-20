import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = ({setIsOpen, setForm}) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async () => {
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      };
      if (!data) setIsOpen(false);
    };
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <div>
        <input
          style={{
            width: "96%",
            fontSize: "20px",
            borderRadius: "10px 10px 0px 0px"
          }}
          className='booking-availability-input small-font'
          placeholder='Username'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <input
          style={{
            width: "96%",
            fontSize: "20px",
            borderTop: "0px"
          }}
          className='booking-availability-input small-font'
          placeholder='Email'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <input
          style={{
            width: "96%",
            fontSize: "20px",
            borderTop: "0px",
          }}
          className='booking-availability-input small-font'
          placeholder='Password'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <input
          style={{
            width: "96%",
            borderTop: "0px",
            fontSize: "20px",
            borderRadius: "0px 0px 10px 10px",
          }}
          className='booking-availability-input small-font'
          placeholder='Repeat Password'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div
        onClick={onSignUp}
        style={{
          cursor:"pointer",
          textAlign: "center"
        }}
        className='booking-availability-button'>Sign Up</div>
        <div>
        <div
          onClick={() => setForm('login')}
          className='small-font'
          style={{cursor: "pointer"}}>Already have an account? Log In</div>
        {errors.map((error, ind) => (
          <div
            style={{color: "red"}}
            className='small-font'
            key={ind}>{error}</div>
        ))}
      </div>
    </div>
  );
};

export default SignUpForm;
