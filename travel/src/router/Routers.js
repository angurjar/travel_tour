import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import BookRide from '../pages/Bookride';
import Payment from '../pages/payment';
import UserManagement from '../components/management/usermanagement';
import DriverManagement from '../components/management/drivermanagement';
import RideManagement from '../components/management/ridemanagement';
import PaymentsTransactions from '.././components/management/payementtransaction';
import AnalyticsDashboard from '.././components/dhashboard/dhashboard';
import AdminDashboard from '.././components/Admin/admin';


const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         <Route path="/book-ride" element={<BookRide />} />
         <Route path="/payment" element={<Payment />} />
         <Route path="/admin/users" element={<UserManagement />} /> */
         <Route path="/admin/drivers" element={<DriverManagement />} />
        <Route path="/admin/rides" element={<RideManagement />} />
        <Route path="/admin/transactions" element={<PaymentsTransactions />} />
        <Route path="/admin/analytics" element={<AnalyticsDashboard />} />
        <Route path="/admin/adminpanel" element={<AdminDashboard />} />
      </Routes>
   )
}

export default Routers