import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DriverManagement = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/drivers')
      .then(response => setDrivers(response.data))
      .catch(error => console.error('Error fetching drivers:', error));
  }, []);

  const approveDriver = (driverId) => {
    axios.post(`/api/admin/drivers/${driverId}/approve`)
      .then(() => {
        setDrivers(drivers.map(driver => 
          driver.id === driverId ? { ...driver, approved: true } : driver
        ));
      })
      .catch(error => console.error('Error approving driver:', error));
  };

  return (
    <div>
      <h2>Driver Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.approved ? 'Approved' : 'Pending'}</td>
              <td>
                {!driver.approved && (
                  <button onClick={() => approveDriver(driver.id)}>Approve</button>
                )}
                <button onClick={() => (driver.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverManagement;
