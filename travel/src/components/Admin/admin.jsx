// src/pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Modal,
  Box,
} from '@mui/material';

const AdminDashboard = () => {
  const [metrics, setMetrics] = useState({});
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    axios.get('/api/admin/analytics')
      .then(response => setMetrics(response.data))
      .catch(error => console.error('Error fetching analytics:', error));

    axios.get('/api/admin/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));

    axios.get('/api/admin/bookings')
      .then(response => setBookings(response.data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  const handleAddUser = () => {
    axios.post('/api/admin/users', newUser)
      .then(response => {
        setUsers([...users, response.data]);
        setShowAddUserModal(false);
        setNewUser({ name: '', email: '' });
      })
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <Container>
        
        <Typography variant="h4" gutterBottom>
               Dashboard-management
      </Typography>
      
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Rides</Typography>
              <Typography variant="h4">{metrics.totalRides || 0}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Revenue</Typography>
              <Typography variant="h4">${metrics.totalRevenue || 0}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">User Growth (Last 30 Days)</Typography>
              <Typography variant="h4">{metrics.userGrowth || 0}%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Driver Growth (Last 30 Days)</Typography>
              <Typography variant="h4">{metrics.driverGrowth || 0}%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Button variant="contained" color="primary" onClick={() => setShowAddUserModal(true)} style={{ marginTop: '20px' }}>
        Add User
      </Button>

      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Bookings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Car</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map(booking => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.user}</TableCell>
                <TableCell>{booking.car}</TableCell>
                <TableCell>{booking.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add User Modal */}
      <Modal open={showAddUserModal} onClose={() => setShowAddUserModal(false)}>
        <Box
          sx={{
            width: 400,
            margin: 'auto',
            marginTop: '10%',
            padding: 2,
            backgroundColor: 'white',
            borderRadius: 1,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add New User
          </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddUser}
            style={{ marginTop: '20px' }}
          >
            Add User
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
