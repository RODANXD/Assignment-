import React from 'react';
import { Outlet } from 'react-router-dom';
import Struct from './Struct';
import { Dashboard } from './Dashboard';
import Header from './Header2';
import Orderpage from './Orderpage';
import { Productpage } from './Productpage';
import { Transactionpage } from './Transactionpage';
import Solution from './Solution';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Struct/>}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Product" element={<Productpage />} />
            <Route path="/Order" element={<Orderpage />} />
            <Route path='/Transaction' element={<Transactionpage />} />
            <Route path='/Solution' element={<Solution />} />
            </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
