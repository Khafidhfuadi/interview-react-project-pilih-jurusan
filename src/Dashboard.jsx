import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ onLogin }) => {
  // fetch email from local storage
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  // handleLogout
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    onLogin();
  };

  return (
    <div className="container">
      <img src="../public/images/line.svg" className="line-bg" alt="line" />

      <div className="row justify-content-center">
        <img
          src="../public/images/left-decor.png"
          className="left-decor-bg"
          alt="left-decor"
        />
        <img
          src="../public/images/right-decor.png"
          className="right-decor-bg"
          alt="right-decor"
        />
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="headline-text">Dashboard</h2>
              <p className="mb-4">Selamat datang {email}</p>
              <div className="foods-list">
                <p>Daftar Makanan</p>
                <ul>
                  <li>Rendang</li>
                  <li>Ayam Bakar</li>
                </ul>
              </div>
              <button onClick={handleLogout} className="btn">
                Keluar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
