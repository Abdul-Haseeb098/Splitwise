import React from 'react';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Expense from './components/Expense';
import Activity from './components/Activity';
import Leftbar from './components/Leftbar';
import Home from './components/Home';
import Signup from './components/Signup'
import Loginpage from './components/Login_page';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {!isHome && <Navbar />}
      {!isHome && <Rightbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/expense' element={<Expense />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/loginpage' element={<Loginpage />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      {!isHome && <Leftbar />}
    </>
  );
};

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
