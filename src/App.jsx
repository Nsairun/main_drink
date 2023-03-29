import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/dashboard/Dashboard';
import SideBar from './pages/SideBar/SideBar';
import DashBd1 from './pages/dashboard/DashBd1';
import DashBd2 from './pages/dashboard/DashBd2';
import DashBd3 from './pages/dashboard/DashBd3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SideBar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashBd1" element={<DashBd1 />} />
          <Route path="/dashBd2" element={<DashBd2 />} />
          <Route path="/dashBd1" element={<DashBd3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
