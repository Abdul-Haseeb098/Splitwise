import React from "react";
import "./Rightbar.css"; 
const Dashboard = () => {
  return (
    <div className="dashboard-right">
      {/* Header Section */}
      <div className="dashboard_title">
        <div className="dashboard_heading">
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard_btns">
          <button className="add">Add an expense</button>
          <button className="settings">Settle up</button>
        </div>
      </div>

      {/* Content Section */}
      <div className="dashboard_content">
        <div className="box">
          <div className="img">
            <img
              src="https://assets.splitwise.com/assets/fat_rabbit/person-2d59b69b3e7431884ebec1a55de75a4153a17c4050e6b50051ca90412e72cf96.png" 
              alt="Dashboard Illustration"            />
          </div>
          <div className="welcome-text">
            <h3>Welcome to Splitwise!</h3>
            <p style={{paddingBottom:"5px"}}>Splitwise helps you split bills with friends.</p>
            <p style={{paddingBottom:"10px"}}>Click “Add an expense” above to get started, or invite some friends first!</p>
            <button className="add"><i class="fa-solid fa-plus"></i> <i class="fa-solid fa-user"></i>Add friends on Splitwise</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
