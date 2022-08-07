import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import EmployeeCard from "./EmployeeCard";
import Modal from "./Modal";

function Proptabs() {
  const [employeeData, setEmployeeData] = useState([]);

  const [employeeId, setEmployeeId] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((res) => res && res.data && setEmployeeData(res.data));
  }, []);

  const handleProfileClick = (id) => {
    setEmployeeId(id);
    setModalOpen(true);
  };

  return (
    <>
      <Tabs />
      <Tabs />
      <section className="cards">
        <div className="container">
          <div className="row">
            {employeeData.map((item) => {
              return (
                <>
                  <EmployeeCard
                    key={item.id}
                    id={item.id}
                    name={item.employee_name}
                    age={item.employee_age}
                    salary={item.employee_salary}
                    handleProfileClick={handleProfileClick}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <Modal closeModal={() => setModalOpen(false)} id={employeeId} />
      )}
      
    </>
  );
}

export default Proptabs;
