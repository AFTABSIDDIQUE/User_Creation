import React, { useState, useEffect } from 'react';

function UserRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
  });
  const [userDataArray, setUserDataArray] = useState([]);

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedData = localStorage.getItem('userDataArray');
    if (storedData) {
      setUserDataArray(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new user data to the array
    const updatedUserDataArray = [...userDataArray, formData];

    // Store the updated array in localStorage
    localStorage.setItem('userDataArray', JSON.stringify(updatedUserDataArray));
    setUserDataArray(updatedUserDataArray); //Update state so you can see the data

    // Clear the form after submission (optional)
    setFormData({
      name: '',
      email: '',
      contact: '',
      address: '',
    });

    alert('User registered successfully!'); // Or a more user-friendly message
  };

  return (
    <div className="container mt-4">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (form inputs remain the same) ... */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact:</label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Display the stored data (for demonstration) */}
      <div className="mt-4">
        <h3>Registered Users:</h3>
        <pre>{JSON.stringify(userDataArray, null, 2)}</pre> {/* Pretty print JSON */}
      </div>
    </div>
  );
}

export default UserRegistration;