/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { saveToken } from '../utils';
import './Login.css';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      emailAddress: target.emailAddress.value,
      password: target.password.value,
    };

    setIsLoading(true);
    setError('');
    try {
      const { data } = await login(user.emailAddress, user.password);
      saveToken(data.token);
      navigate('/');
    } catch (e) {
      if (e.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toRegister = () => {
    navigate('/register');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <h1>Log In</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="email address"
          name="emailAddress"
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          required
        />
        <button type="submit">Enter</button>
        <p>
          Don&apos;t Have an account ?
          <span onClick={toRegister}>REGISTER...</span>
        </p>
      </div>
    </form>
  );
}

export default Login;
