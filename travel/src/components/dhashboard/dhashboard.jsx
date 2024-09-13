import React from 'react';

// Simulated data for live locations, bookings, and payments
const drivers = [
  { id: 1, name: 'Driver 1', location: 'Sector 15, Noida', status: 'Online' },
  { id: 2, name: 'Driver 2', location: 'DLF Cyber City, Gurgaon', status: 'Online' },
  { id: 3, name: 'Driver 3', location: 'Connaught Place, Delhi', status: 'Offline' },
];

const bookings = [
  { id: 1, user: 'User 1', destination: 'Indira Gandhi Airport', status: 'Completed' },
  { id: 2, user: 'User 2', destination: 'India Gate', status: 'Ongoing' },
  { id: 3, user: 'User 3', destination: 'Sector 62, Noida', status: 'Pending' },
];

const payments = [
  { id: 1, user: 'User 1', amount: 450, status: 'Paid' },
  { id: 2, user: 'User 2', amount: 1200, status: 'Pending' },
  { id: 3, user: 'User 3', amount: 750, status: 'Failed' },
];

const AnalyticsDashboard = () => {
  const metrics = {
    totalRides: 123456,
    totalRevenue: 9876543.21,
    userGrowth: 12.5,
    driverGrowth: 8.3,
    averageRideRating: 4.75,
    activeDrivers: 1500,
    canceledRides: 320,
    peakHoursRides: 56789,
    userSatisfaction: 92.5,
  };

  return (
    <div style={dashboardStyle}>
      <h2>Ride-Hailing Analytics Dashboard</h2>
      <div style={cardsContainerStyle}>
        {/* Main Metrics Cards */}
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} style={cardStyle}>
            <h3>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
            <p>{typeof value === 'number' ? value.toLocaleString() : value}</p>
          </div>
        ))}
      </div>

      {/* Live Location Section */}
      <div style={sectionStyle}>
        <h3>Live Location of Drivers</h3>
        <div style={mapContainerStyle}>
          {drivers.map(driver => (
            <div key={driver.id} style={driverStyle}>
              <p><strong>{driver.name}</strong> - {driver.location}</p>
              <p>Status: {driver.status}</p>
              {/* Placeholder for map */}
              <div style={mapPlaceholderStyle}>Map Placeholder</div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Status Section */}
      <div style={sectionStyle}>
        <h3>Current Bookings</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>User</th>
              <th>Destination</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.user}</td>
                <td>{booking.destination}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Status Section */}
      <div style={sectionStyle}>
        <h3>Recent Payments</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id}>
                <td>{payment.user}</td>
                <td>${payment.amount.toFixed(2)}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styling objects
const dashboardStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: '#f0f2f5',
  color: '#333',
};

const cardsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  flex: '1 1 200px',
  minWidth: '200px',
  textAlign: 'center',
};

const sectionStyle = {
  marginTop: '40px',
};

const mapContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
};

const driverStyle = {
  flex: '1 1 300px',
  backgroundColor: '#fff',
  padding: '15px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const mapPlaceholderStyle = {
  height: '200px',
  backgroundColor: '#e0e0e0',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#888',
  marginTop: '10px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
};

const thStyle = {
  backgroundColor: '#f5f5f5',
  padding: '10px',
  textAlign: 'left',
  borderBottom: '2px solid #ddd',
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export default AnalyticsDashboard;
