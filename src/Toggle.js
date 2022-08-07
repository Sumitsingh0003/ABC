import React, { useState } from "react";

function Toggle() {

  const [status, setStatus] = React.useState(true);

  return (
    <>
      <section className="counter_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-12 m-auto">
              <button onClick={() => setStatus(!status)}> Button </button>
              {status ? <div className="togle_div">Box</div> : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Toggle;
