import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../api/auth';
import NavBar from '../../components/NavBar';
import './ProfilePage.css';

function ProfilePage() {
  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="myProfile-container">
        <h1>
          <u>PROFILE</u>
        </h1>
        <div className="Profile-info">
          <h1>First Name:</h1>
          <p>{user?.firstName}</p>
        </div>
        <div className="Profile-info">
          <h1>Second Name:</h1>
          <p>{user?.lastName}</p>
        </div>
        <div className="Profile-info">
          <h1>Phone Number:</h1>
          <p>{user?.Phone}</p>
        </div>
        <div className="Profile-info">
          <h1>E-MAIL:</h1>
          <p>{user?.emailAdress}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
