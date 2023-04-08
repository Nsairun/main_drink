/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from 'react';
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
  FaRegAddressCard,
  FaPhone,
  FaCopyright,
  FaCoffee,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaMap,
  FaMapPin,
} from 'react-icons/fa';
import menuIcon from '../../images/download.png';
import AuthGaurd from '../../components/AuthGaurd';
import DrinksContext from '../../context/DrinksContext';
import beer from '../../images/beer1.jpg';
import beer2 from '../../images/beer.jpeg';

function SideBar({ currentUser }) {
  const { drinksData } = useContext(DrinksContext);
  const [showNav, setShowNav] = useState({
    side: false,
    dropDown: false,
  });

  const filterOptions = [
    { id: 1, name: 'Categories', options: ['opt 1', 'opt 2'] },
    { id: 2, name: 'Ingredients', options: ['opt 1', 'opt 2'] },
    { id: 3, name: 'Glasses', options: ['opt 1', 'opt 2'] },
    { id: 4, name: 'Alcoholic', options: ['YES', 'NO', 'BOTH'] },
  ];

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
              {filterOptions?.map(({ id, name, options }) => (
                <div className="filter-section" key={id}>
                  <h5 className="piece-title">{name}</h5>
                  <div className="options">
                    {options.map((item, key) => (
                      <label
                        htmlFor={item}
                        className="drinks-checkbox"
                        key={key}
                      >
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
                  Navigate Pages...
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
                  {currentUser?.isAdmin && (
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
          <div className="site-desc">
            <div className="desc1">
              <h4>
                Welcome to Nsairun drinks corner of quality drinks. We have a
                variety of very exciting and mouth tasting drinks for you
              </h4>
              <h6> Feel free and enjoy our variety of good drinks...</h6>
            </div>
            <div className="desc2">
              <img src={beer} alt="drink" />
              <img src={beer2} alt="drink" />
            </div>
          </div>

          <div className="drinks-body">
            {drinksData?.map((drink) => (
              <div className="drink" key={drinksData?.id}>
                <h1> {drink?.name} </h1>
                <img src={drink?.Image_url} alt="drinks" />
                <p>{drink?.description}</p>
                <p>{drink?.glass}</p>
              </div>
            ))}
          </div>
          <div className="footer">
            <div className="about">
              <h3>ABOUT</h3>
              <h6>
                This is a full stag website project about drinks that was given
                in Rebase academy to test oyur level of understanding on our
                training for the past 07 months. It will be my first full stag
                project as well.
              </h6>
            </div>
            <div className="contact">
              <h3> CONTACT </h3>
              <h6>
                <FaMap />
                <FaMapPin />
                Cameroon, center Region{' '}
              </h6>
              <h6>
                <FaMapMarkerAlt />
                Biyem-Assi Monte Jouvence, Entree Hotel Jouvence
              </h6>
              <h6>
                PHONE NUMBER: 0123456789 <FaPhone />
              </h6>
            </div>
            <div className="social-media">
              <h3> SOCIAL MEDIA </h3>
              <h2>
                <FaInstagram />
                <FaWhatsapp />
                <FaTwitter />
                <FaFacebookF />
              </h2>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <h6>
                <FaRegAddressCard />
                Email address
              </h6>
              <h6>
                <FaRegEnvelope /> nsairundrinks@gmail.com{' '}
              </h6>
            </div>
            <div className="mail">
              <h5>
                <FaCoffee />
                An initiative by Nsairun Emmanuel
              </h5>
              <h6>
                <FaCopyright />
                2023 Rebase Academy| Legalities | Manual
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthGaurd(SideBar);
