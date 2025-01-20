import React from "react";
import "./css/Rightbar.css"; 

const Activity = () => {
  return (
    <div className="dashboard-right">
      {/* Header Section */}
      <div className="dashboard_title">
        <div className="dashboard_heading">
          <h1>Recent activity</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="dashboard_content1">
       <p style={{color:"#999",fontSize:"16px",padding:"20px 15px"}}>There is no activity in your account yet. Try adding an expense!</p>
      </div>
    </div>
  );
};

export default Activity;
