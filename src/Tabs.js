import React from "react";

function Tabs() {
  const [tabsid, changeTabsId] = React.useState(0);

  const tabs = [
    {
      id: 0,
      title: "Tabe 1",
      discription:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ",
    },
    {
      id: 1,
      title: "Tabe 2",
      discription:
        "ILorem ipsum may be used as a placeholder before final copy is available.",
    },

    {
      id: 2,
      title: "Tabe 3",
      discription:
        "It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.",
    },
  ];

  const showTabs =(id) =>{
        changeTabsId(id);
  }

  return (
    <>
      <section className="counter_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-12 m-auto">
              <div className="counters">
                <ul className="tabs">
                  {tabs.map((item) => {
                    return (
                      <li key={item.id} onClick={(()=>showTabs(item.id))} className={`${item.id===tabsid ? "active":"nonActive"}`}>
                        {item.title}

                        <div className={`${item.id===tabsid ? "show":"hide"}`}>
                            {item.discription}
                            
                                </div>
                      </li>
                    );
                  })}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tabs;
