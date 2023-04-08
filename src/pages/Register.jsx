/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../api/auth';
import NavBar from '../components/NavBar';

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // write code...
    const { target } = e;
    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      emailAddress: target.emailAddress.value,
      phone: target.phone.value,
      password: target.password.value,
      passwordConfirmation: target.passwordConfirmation.value,
    };

    setIsLoading(true);
    await register(data);
    setIsLoading(false);
    navigate('/login');
  };

  const toLogin = () => {
    navigate('/login');
  };
  return (
    <form onSubmit={handleSubmit}>
      <NavBar />
      <div className="user">
        <h1>CREATE ACOUNT</h1>
        <p>{isLoading ? 'loading...' : ''}</p>
        <div className="userInput">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />
          <input type="text" placeholder="Last Name" name="lastName" required />
          <input
            type="email"
            placeholder="email"
            name="emailAddress"
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Password confirmation"
            name="passwordConfirmation"
            required
          />
        </div>
        <button type="submit">Create</button>
        <p>
          Have an account ? <span onClick={toLogin}>Login...</span>
        </p>
      </div>
    </form>
  );
}

export default Register;
