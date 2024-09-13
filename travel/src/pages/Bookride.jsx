// client/src/components/BookRide.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookRide() {
    const [drivers, setDrivers] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        axios.get('/api/drivers').then((response) => {
            setDrivers(response.data);
        });
    }, []);

    const handleBooking = () => {
        axios.post('/book-ride', { userId: 'someUserId', driverId: selectedDriver, distance })
            .then((response) => {
                console.log('Ride booked:', response.data);
            })
            .catch((error) => {
                console.error('Error booking ride:', error);
            });
    };

    return (
        <div>
            <h2>Book a Ride</h2>
            <select onChange={(e) => setSelectedDriver(e.target.value)}>
                <option value="">Select a driver</option>
                {drivers.map((driver) => (
                    <option key={driver._id} value={driver._id}>
                        {driver.name} - {driver.vehicleNumber}
                    </option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Distance in km"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
            />
            <button onClick={handleBooking}>Book Ride</button>
        </div>
    );
}

export default BookRide;
