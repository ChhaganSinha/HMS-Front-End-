// src/Pages/Auth/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../Services/apiService";
import { useAuth } from "../../contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login: setLoginStatus } = useAuth(); // Import the login function
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log("Logged in:", data);
      setLoginStatus(); // Set authentication status
      navigate("/admin/dashboard"); // Redirect to admin after successful login
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage(
        "Login failed. Please check your credentials and try again."
      );
    }
  };

  return (
    <div
      className="Container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={require("../../Assets/pxfuel.jpg")}
        style={{ width: "100vw", height: "100vh" }}
      />
      <div
        className="card p-4"
        style={{
          width: "35%",
          //   height: "50%",
          position: "absolute",
          backgroundColor: "#0B4F70",
          color: "#eef1f6",
          opacity: "0.8",
        }}
      >
        <img src={require("../../Assets/Hospital Guru Logo.png")} alt="logo" style={{width:"15%", alignSelf:"center"}}/>
        <p style={{alignSelf:"center"}}>Hospital Guru</p>
        <h5 className="text-center mb-4">Sign In</h5>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div style={{display:"flex", justifyContent:"space-between"}}>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
                Remember me
            </label>
          </div>
          <div>
            <p>Forget Password?</p>
          </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
