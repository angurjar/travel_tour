import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RideManagement = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/rides')
      .then(response => setRides(response.data))
      .catch(error => console.error('Error fetching rides:', error));
  }, []);

  return (
    <div>
      <h2>Ride Management</h2>
      <table>
        <thead>
          <tr>
            <th>Ride ID</th>
            <th>Passenger</th>
            <th>Driver</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rides.map(ride => (
            <tr key={ride.id}>
              <td>{ride.id}</td>
              <td>{ride.passengerName}</td>
              <td>{ride.driverName}</td>
              <td>{ride.status}</td>
              <td>{new Date(ride.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RideManagement;
