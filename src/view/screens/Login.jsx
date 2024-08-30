import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));

    // Navigate if login is successful
    if (isAuthenticated) {
      navigate("/");
    } else {
      alert("Invalid Credential");
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleLogin}>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email :
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="staticEmail"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password :
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </form>
      <div className="row mt-3">
        <div className="col-sm-10 offset-sm-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
