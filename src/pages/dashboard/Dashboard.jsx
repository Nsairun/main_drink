import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { getCurrentUser } from '../../api/auth';
import NavBar from '../../components/NavBar';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  const toDashbd1 = () => {
    navigate('dashBd1', { replace: true });
  };

  const toDashbd2 = () => {
    navigate('dashBd2', { replace: true });
  };

  const toDashbd3 = () => {
    navigate('dashBd3', { replace: true });
  };

  return (
    <form className="dashform">
      <NavBar />
      <div className="form1">
        <h1>Dashboard Page</h1>
        <h2>
          Admin: {user?.firstName} {user?.lastName}
        </h2>
      </div>
      <div className="accessTables">
        <div className="blocks">
          <h3>Access Dashboard for drinks </h3>
          <button type="submit" onClick={toDashbd1}>
            Drinks
          </button>
        </div>
        <div className="blocks">
          <h3>Access Dashboard for Ingredients </h3>
          <button type="submit" onClick={toDashbd2}>
            Ingredients
          </button>
        </div>
        <div className="blocks">
          <h3>Access Dashboard for Glasses </h3>
          <button type="submit" onClick={toDashbd3}>
            Glasses
          </button>
        </div>
      </div>

      <Outlet />
    </form>
  );
}

export default Dashboard;
