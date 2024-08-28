import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    // console.log(email);
    if (email) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-light"
      style={{ backgroundColor: "#e3f2fd", borderBottom: "1px solid #ddd" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#0d6efd" }}
        >
          Hotel
        </Link>
        <div>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
