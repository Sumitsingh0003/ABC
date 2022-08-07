import React, { useState, useEffect } from "react";

function Modal({ closeModal, id }) {
  const [employeeData, setEmployeeData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((res) => {
        return res.json();
      })

      .catch((err) => setError(err))

      .then((res) => {
        setLoading(false);
        if (res.data) {
          return setEmployeeData(res.data);
        }
        
        return setError(res.message);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <div className="togle_div modal_pop">
        <div className="innerPopup">
          <span onClick={closeModal} className="cross">
            X
          </span>
          <>
            {loading && <p>loading...</p>}
            {!loading && !error && (
              <h1>
                Salary:
                {employeeData && employeeData.employee_salary && employeeData.employee_salary}
              </h1>
            )}
            {error && <p>{error}</p>}
          </>
          <h2>Open PopUp</h2>
        </div>
      </div>
    </>
  );
}

export default Modal;
