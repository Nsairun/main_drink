import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../api/auth';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  const toDashbd1 = () => {
    navigate('/dashBd1');
  };

  const toDashbd2 = () => {
    navigate('/dashBd2');
  };

  const toDashbd3 = () => {
    navigate('/dashBd3');
  };

  return (
    <form className="dashform">
      <h1>Dashboard Page</h1>
      <h2>
        {user?.firstName} {user?.lastName}
      </h2>
      <div className="accessTables">
        <h3>Access Dashboard for drinks </h3>
        <button type="submit" onClick={toDashbd1}>
          Drinks
        </button>
        <h3>Access Dashboard for Ingredients </h3>
        <button type="submit" onClick={toDashbd2}>
          Ingredients
        </button>
        <h3>Access Dashboard for Glasses </h3>
        <button type="submit" onClick={toDashbd3}>
          Glasses
        </button>
      </div>
    </form>
  );
}

export default Dashboard;
