import React, { useState } from "react";

function Accordians() {
  
    const [accordionVal, changeAccordionVal] = React.useState(0);

    const accordions = [
      {
      id:0,
      title:"Item0",
      description:"udi udi jaaye udi udi jaye",
    },

    {
      id:1,
      title:"Item1",
      description:"udi udi jaaye udi udi jaye",
    },

    {
      id:2,
      title:"Item2",
      description:"udi udi jaaye udi udi jaye",
    },
  
  ];

  const handleAccordion= (id)=>{
    if(id===accordionVal){
      changeAccordionVal(-1);
    }
    else{
      changeAccordionVal(id);
    }
  }

  return (
    <>
      <section className="counter_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-12 m-auto">
              <div className="acco">
                <ul>
                {accordions.map((item)=>{
                  return(

                    <li key={item.id} onClick={()=>handleAccordion(item.id)}>
                      {item.title}

                      <div className={`${item.id===accordionVal ? "show":"hide"}`} >
                        {item.description}
                        </div> 
                    </li>
                  )
                },
                ) 
               }
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordians;
