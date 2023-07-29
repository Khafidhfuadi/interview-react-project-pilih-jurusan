import React from "react";
import { axiosLogin } from "./constans";

const Login = ({ onLogin }) => {
  // const { login } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosLogin.post("/users/authenticate", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      onLogin();
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(errorMessage);
    }
  };

  return (
    <>
      <div className="container">
        {errorMessage && (
          <div className="alert alert-dismissible fade show" role="alert">
            {errorMessage}
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}

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
                  {email === "" ? (
                    <p>
                      <small className="label-error">
                        Email cannot be empty
                      </small>
                    </p>
                  ) : (
                    ""
                  )}
                  {email !== "" && !email.includes("@") ? (
                    <p>
                      <small className="label-error">Email is not valid</small>
                    </p>
                  ) : (
                    ""
                  )}
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
                  {password === "" ? (
                    <p>
                      <small className="label-error">
                        Password cannot be empty
                      </small>
                    </p>
                  ) : (
                    ""
                  )}
                  {password !== "" && password.length < 6 ? (
                    <p>
                      <small className="label-error">
                        Password must be at least 6 characters
                      </small>
                    </p>
                  ) : (
                    ""
                  )}
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
