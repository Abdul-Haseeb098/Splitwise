import React from "react";
import "./css/Rightbar.css";

const Expense = () => {
  return (
    <>
    <div className="main">
    <div className="dashboard-right">
      {/* Header Section */}
      <div className="dashboard_title">
        <div className="dashboard_heading">
          <h1>All expenses</h1>
        </div>
        <div className="dashboard_btns">
          <button className="add">Add an expense</button>
          <button className="settings">Settle up</button>
        </div>
      </div>

      {/* Content Section */}
      <div className="dashboard_content">
        <div className="box" style={{padding:"0px 50px"}}>
          <div className="img">
            <img
              src="https://assets.splitwise.com/assets/fat_rabbit/empty-table-effed2a2e610373b6407d746cb95858f5d47329c8610bb70f1fd2040dfa35165.png" 
              alt="Dashboard Illustration"style={{width:"150px"}}
            />
          </div>
          <div className="welcome-text" style={{marginBottom:"110px",marginLeft:"20px"}}>
            <h3>You have not added <br /> any expenses yet</h3>
            <p>To add a new expense, click the <br /> orange “Add an expense” button.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="side_section">
        <div className="side_icons">
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-calendar-days"></i>
        <i class="fa-solid fa-chart-simple"></i>
        </div>
        <div className="side_text">
            <h2>Your total balance</h2>
            <p>You are all settled up</p>
        </div>
    </div>
    </>
  );
};

export default Expense;
