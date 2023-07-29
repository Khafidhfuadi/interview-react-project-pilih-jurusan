import React, { useEffect } from "react";
import {
  API_BASE_URL,
  cfAccessClientId,
  cfAccessClientSecret,
} from "./constans";

import axios from "axios";

const Dashboard = ({ onLogout }) => {
  const email = localStorage.getItem("email");

  const [foods, setFoods] = React.useState([]);

  const getFoods = async () => {
    try {
      const response = await axios.get("/foods", {
        baseURL: API_BASE_URL,
        headers: {
          "CF-Access-Client-Id": cfAccessClientId,
          "CF-Access-Client-Secret": cfAccessClientSecret,
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setFoods(response.data.data);
    } catch (error) {
      console.error("Get foods failed:", error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  const formatIDR = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedPrice.replace(",00", "");
  };

  // handleLogout
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="container">
      <img src="../public/images/logo.png" className="logo" alt="logo" />

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
                  {foods.map((food) => (
                    <li key={food.id}>
                      {food.name} [{formatIDR(food.price)}]
                    </li>
                  ))}
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
