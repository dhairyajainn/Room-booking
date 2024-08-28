import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = {
      email: "user@example.com",
      password: "12345",
    };
    if(email === user.email && password === user.password) {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        navigate('/')
    } else {
        alert('Invalid credentials')
    }
  };
  return (
    <div className="container mt-5">
      <form>
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
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
