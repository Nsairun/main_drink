/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';
import {
  FaWineBottle,
  FaGlassMartiniAlt,
  FaGlassWhiskey,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaUserTie,
} from 'react-icons/fa';
import menuIcon from '../../images/download.png';
import drinksData from '../../drinks.json';

function SideBar() {
  const [showNav, setShowNav] = useState({
    side: false,
    dropDown: false,
  });
  const navigate = useNavigate();
  const toRegister = () => {
    navigate('/register');
  };

  const toLogin = () => {
    navigate('/login');
  };

  const toProfile = () => {
    navigate('/profilepage');
  };

  const simulation = [
    {
      title: 'category',
      options: ['cat 1', 'cat 2', 'cat 3'],
    },
    {
      title: 'Drinks',
      options: ['drink 1', 'drink 2', 'drink 3'],
      recipe: ['step 1', 'step 2', 'step 3', 'step 4'],
    },
    {
      title: 'Glasses',
      options: ['glass 1', 'glass 2', 'glass 3'],
    },
    {
      title: 'is alcoholic',
      options: ['Yes', 'NO', 'Both'],
    },
  ];

  return (
    <div>
      <div className="drinks-container">
        <div className="section-one-holder">
          <div className="section-one">
            <div className="menu-img1">
              <div className="mainHeader">
                <h2>
                  Drinks <FaWineBottle />
                </h2>
                <h3> Section </h3>
              </div>
              <div className="menu-img">
                <img
                  src={menuIcon}
                  alt="menu"
                  onClick={() =>
                    setShowNav((prev) => ({ ...prev, side: !prev.side }))
                  }
                />
                <h3>MENU</h3>
              </div>
            </div>
            <div
              className={
                showNav.side ? 'side_menu active_side_menu' : 'side_menu'
              }
            >
              {simulation?.map((piece) => (
                <div className="filter-section">
                  <h5 className="piece-title">{piece.title}</h5>
                  <div className="options">
                    {piece.options.map((item) => (
                      <label htmlFor={item} className="drinks-checkbox">
                        <input id={item} type="checkbox" />
                        <p>{item}</p>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section-two">
          <div className="topic">
            <h1>
              DRINKS <FaGlassMartiniAlt /> <FaGlassWhiskey />{' '}
            </h1>
            <span className="containing_span">
              <div
                className="admin"
                onClick={() =>
                  setShowNav((prev) => ({ ...prev, dropDown: !prev.dropDown }))
                }
              >
                <h3>
                  Admin...
                  <FaUserTie />
                </h3>
              </div>

              {showNav.dropDown && (
                <div className="inside-span">
                  <u>
                    <u onClick={toRegister}>Register page</u>
                  </u>
                  <u>
                    <p onClick={toLogin}>LogIn</p>
                  </u>
                  <u>
                    <p onClick={toProfile}>Profile</p>
                  </u>
                </div>
              )}
            </span>
          </div>

          <div className="drinks-body">
            {drinksData.map((drink, indx) => (
              <div className="drink" key={indx}>
                <h1> {drink.name} </h1>
                <img src={drink.src} alt="drinks" />
                <p>{drink.description}</p>
              </div>
            ))}
          </div>
          <div className="social-media">
            <p>
              <FaInstagram />
              <FaWhatsapp />
              <FaTwitter />
              <FaFacebookF />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
