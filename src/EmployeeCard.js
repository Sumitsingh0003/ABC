import React from "react";

function EmployeeCard({ name, age, id, handleProfileClick }) {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-4 col-6">
        <div className="card_bx">
          <h4>Name: {name}</h4>
          <h5>Age: {age}</h5>
          <button className="view_pro" onClick={() => handleProfileClick(id)}>
            View Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default EmployeeCard;
