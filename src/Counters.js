import React, { useState } from "react";


function Counters() {
  const [num, steNum] = useState(0); //return 2 things first is state current value and
                                     //second thing method or function to change that state
  const IncVal = () => {
    steNum(num + 1);
  };

  const DecVal = () => {
    if (num > 0) {
      steNum(num - 1);
    } else {
      alert("Sorry Limit Only 0");
      steNum(0);
    }
  };

  return (
    <>
      <section className="counter_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-12 m-auto">
              <div className="counters">
                <button onClick={DecVal} >Minus - </button>
                <input class="inpt_field" value={num} />
                <button onClick={IncVal} >Plus + </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counters;
