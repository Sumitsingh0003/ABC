import React, { useState } from "react";

function Accordian() {
  const [visibleItemNo, setVisibleItemNo] = React.useState(0);
  const accordions = [
    {
      id: 0,
      title: "abc",
      description: "123456789",
    },
    {
      id: 1,
      title: "def",
      description: "qwertyui",
    },
    {
      id: 2,
      title: "ghi",
      description: "zxcvbnm,",
    },
  ];

  const handleAccordionItemClick = (id) => {
    if(id===visibleItemNo){
        setVisibleItemNo(-1);
    }
    else{
        setVisibleItemNo(id);
    }
    
  };

  return (
    <>
      <section className="counter_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-12 m-auto">
              <ul className="accor">
                {accordions.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={() => handleAccordionItemClick(item.id)}
                    >
                      {item.title}
                      <div
                        className={`${item.id === visibleItemNo ? "show" : "hide"
                        }`}
                      >
                        {item.description}
                      </div>
                    </li>
                  );
                })}
                
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordian;
