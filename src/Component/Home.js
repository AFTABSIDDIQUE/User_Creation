import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleClick = () => {
    navigate('/users'); // Navigate to the /users route
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100"> {/* Key changes here */}
      <div className="container mt-4 text-center"> {/* Removed text-align-center, added text-center */}
        <h1>Welcome To User Management</h1>
        <p style={{color:'grey'}}>Use the Button Below to Navigate</p>

        <Link to='users' type="button" className="btn btn-primary mx-2" onClick={handleClick}>
        Register User
        </Link>

        <Link to='viewUsers' type="button" className="btn btn-success">View Register User</Link>
      
      </div>
    </div>
  );
}