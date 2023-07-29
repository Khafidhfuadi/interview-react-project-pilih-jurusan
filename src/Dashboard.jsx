import React from "react";

const Dashboard = () => {
  // fetch email from local storage
  const email = localStorage.getItem("email");

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;