/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import './NavBar.css';
import { FaGlassMartiniAlt, FaGlassWhiskey, FaUserTie } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [showNav, setShowNav] = useState({
    side: false,
    dropDown: false,
  });

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  const toRegister = () => {
    navigate('/register');
  };

  const toLogin = () => {
    navigate('/login');
  };

  const toProfile = () => {
    navigate('/profilepage');
  };

  return (
    <div>
      <div className="topic">
        <h1>
          DRINKS - <FaGlassMartiniAlt /> <FaGlassWhiskey />
        </h1>
        <span className="containing_span">
          <div
            className="admin"
            onClick={() =>
              setShowNav((prev) => ({ ...prev, dropDown: !prev.dropDown }))
            }
          >
            <h3>
              <FaUserTie /> Page Nav...
            </h3>
          </div>

          {showNav.dropDown && (
            <div className="inside-span">
              <u>
                <u onClick={toHome}>Home page</u>
              </u>
              <u>
                <u onClick={toRegister}>Register page</u>
              </u>
              <u>
                <p onClick={toLogin}>LogIn</p>
              </u>
              {NavBar?.isAdmin && (
                <u>
                  <p onClick={() => navigate('/dashboard')}>Admin page</p>
                </u>
              )}
              <u>
                <p onClick={toProfile}>Profile</p>
              </u>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
