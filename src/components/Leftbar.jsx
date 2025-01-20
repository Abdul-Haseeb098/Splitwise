import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Leftbar.css'
const Leftbar = () => {
  return (
    <>
    <div className="leftbar">
      <div className="navbar">
        <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} style={{textDecoration:"none",color:"#5bc5a7",fontSize:"16px",fontWeight:"bold",padding: "4px 8px 6px 5px"}}><img src='https://secure.splitwise.com/favicon.ico'/> Dashboard</NavLink>
        </li>
        <li>
        <NavLink to="/activity" className={({ isActive }) => (isActive ? 'active' : '')} style={{textDecoration:"none",color:"#999",fontSize:"16px",padding: "4px 8px 6px",}}><i class="fa-solid fa-flag"></i>Recent activity</NavLink>
        </li>
      </div>
      <li>
      <NavLink to="/expense" className={({ isActive }) => (isActive ? 'active' : '')} style={{textDecoration:"none",color:"#999",fontSize:"14px",padding: "3px 8px 5px 5px",paddingTop:"15px",marginBottom:"5px"}}><i class="fa-solid fa-bars"></i>All expenses</NavLink>
        </li>
      <div className="groups" style={{marginTop:"5px"}}>
        <div>
          GROUPS
        </div>
        <a href="#">+add</a>
      </div>
      <div className="info">
        you do not have any groups yet. 
      </div>
      <div className="groups">
        <div>
          FRIENDS
        </div>
        <a href="#">+add</a>
      </div>
      <div className="info">
        you have not added any <br /> friends yet. 
      </div>
      <div className="form">
        <div className="form_title">
          Invite friends
        </div>
        <div className="form_body">
        <input type="text" placeholder='Enter an email address'/>
        <button>Send invite</button>
        </div>
      </div>
      <div className="btn_group">
        <div className="fb_btn">
        <i class="fa-brands fa-facebook-f"></i>Share
        </div>
        <div className="twitter_btn">
        <i class="fa-brands fa-twitter"></i>Tweet
        </div>
      </div>
    </div>
    </>
  )
}

export default Leftbar
