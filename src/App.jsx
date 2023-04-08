/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/dashboard/Dashboard';
import SideBar from './pages/SideBar/SideBar';
import DashBd1 from './pages/dashboard/DashBd1';
import DashBd2 from './pages/dashboard/DashBd2';
import DashBd3 from './pages/dashboard/DashBd3';
import ProfilePage from './pages/SideBar/ProfilePage';
import DrinksContext from './context/DrinksContext';
import { getDrinksData } from './api/auth';

function App() {
  const [drinksData, setDrinksData] = useState(null);

  useEffect(() => {
    getDrinksData()
      .then((res) => {
        console.log('this res \n', res.data);
        setDrinksData([...res.data]);
      })
      .catch((err) => console.log('this err\n', err));

    // setDrinksData((prev) => prev);
  }, []);

  return (
    <div className="App">
      <DrinksContext.Provider value={{ drinksData }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<SideBar />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="dashBd1" element={<DashBd1 />} />
              <Route path="dashBd2" element={<DashBd2 />} />
              <Route path="dashBd3" element={<DashBd3 />} />
            </Route>
            <Route path="/dashboard1" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </DrinksContext.Provider>
    </div>
  );
}

export default App;
