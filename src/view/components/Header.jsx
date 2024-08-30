import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
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
          {isAuthenticated ? (
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
