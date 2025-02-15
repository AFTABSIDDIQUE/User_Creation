import React, { useState, useEffect } from 'react';

function UserDataView() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('userDataArray'); // Consistent key name
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);

        if (Array.isArray(parsedData)) {
          setUserData(parsedData);
        } else {
          console.error("Data in localStorage is not an array.");
          setUserData([]); // Set to empty array to avoid rendering issues
        }
      } catch (error) {
        console.error("Error parsing data from localStorage:", error);
        setUserData([]); // Set to empty array on error
      }
    } else {
      setUserData([]); // Set to empty array if no data is found
    }
  }, []);

  return (
    <div className="container mt-4">
      <h2>User Data</h2>
      {userData.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>  {/* Key is important! */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

export default UserDataView;