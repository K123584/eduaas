import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Student from '../Pages/Student';
import Home from '../Pages/Home';
import Teacher from '../Pages/Teacher';
import Sidebar  from './Sidebar';

function SidebarRoute() {
  return (      
  <>
    <div className='OverallContent'>
      <Router>
        <Sidebar />
        
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/Student" element={ <Student />}></Route>
          <Route path="/Teacher" element={ <Teacher />}></Route>
        </Routes>
      </Router>
    </div>
  </>
  )
}

export default SidebarRoute;