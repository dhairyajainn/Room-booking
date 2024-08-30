import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('Passwords do not match.')
            return;
        }
        const user = {name, email, password};
        dispatch(signUp(user));
        alert('Sign up successfully');
        navigate('/login')
    }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Sign Up</h3>
            </div>
            <div className="card-body">
              <form> 
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    required
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              <p>Already have an account? <Link href="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register