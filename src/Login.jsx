import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const { login } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const API_BASE_URL = "https://interview-api.pilihjurusan.id/";

  const cfAccessClientId = "8853ca70ca342d5659242857edb234de.access";
  const cfAccessClientSecret =
    "eec6df88a2637183a3df2171f944a2b58eed7ed645eb368edb51437ee8cdd777";

  // Create an Axios instance with the custom headers
  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "CF-Access-Client-Id": cfAccessClientId,
      "CF-Access-Client-Secret": cfAccessClientSecret,
      "Content-Type": "application/json", // Set your desired content type
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/authenticate", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("email", email);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
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
                <h2 className="mb-4">Masuk</h2>
                <p className="mb-4">
                  Masukkan alamat email kata sandi yang telah anda daftarkan.
                </p>
                <form>
                  <div className="form-group mb-3 position-relative">
                    <img
                      src="../public/images/person-icon.svg"
                      className="person-icon"
                      alt="person-icon"
                    />
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="user@user.com"
                    />
                  </div>
                  <div className="form-group position-relative">
                    <img
                      src="../public/images/lock-icon.svg"
                      className="lock-icon"
                      alt="lock-icon"
                    />
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="********"
                    />
                  </div>
                  <button onClick={handleSubmit} className="btn">
                    Masuk Sekarang
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
