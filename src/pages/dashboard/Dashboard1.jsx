import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../api/auth';
import './Dashboard1.css';

function Dashboard() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  const toDashbd1 = () => {
    navigate('SideBar');
  };

  return (
    <form className="dashform">
      <div className="form1">
        <h1>Dashboard Page</h1>
        <h2>
          {user?.firstName} {user?.lastName}
        </h2>
      </div>
      <div className="accessTables">
        <div className="blocks">
          <h3>Access Dashboard for drinks </h3>
          <button type="submit" onClick={toDashbd1}>
            Drinks
          </button>
        </div>
      </div>
    </form>
  );
}

export default Dashboard;
