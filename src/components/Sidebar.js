import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaSchool } from "react-icons/fa6";
import { IoSchoolSharp} from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";

function Sidebar() {
  const nowpage = {
    color: 'black'
  };

  return (
    <>
    <div className="SidebarBackground">
      <div className="logo-title">
        <h2>
          eduaas
        </h2>
      </div>
        <ul className="SidebarList">
          <nav id="sidebar">
            <li><NavLink to="/"><AiFillHome className="sidebar-icon" />Home</NavLink></li>
            <li><NavLink to="/Student"><IoSchoolSharp className="sidebar-icon" />Student</NavLink></li>
            <li><NavLink to="/Teacher"><FaSchool className="sidebar-icon" />Teacher</NavLink></li>
          </nav>
        </ul>
        
    </div>
    
    </>
  )
}

export default Sidebar;