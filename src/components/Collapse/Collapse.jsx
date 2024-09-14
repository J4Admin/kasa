import React, { useState } from "react";
import iconeSrc from "../../assets/icones/arrow.png";
import "./Collapse.scss";

function Collapse({ CollapseData }) {
  const [openCollapse, setOpenCollapse] = useState([]);

  const toggleContent = (index) => {
    setOpenCollapse((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };
  return (
    <>
      {CollapseData.map((item, index) => (
        <div key={index} className="Collapse">
          <div className="Collapse__background">
            <p className="Collapse__title">{item.title}</p>
            <button
              className="Collapse__button"
              onClick={() => toggleContent(index)}
            >
              <img
                className={`Collapse__arrow ${
                  openCollapse.includes(index) ? "Collapse__arrow--rotate" : ""
                }`}
                src={iconeSrc}
                alt="open-collapse"
              />
            </button>
          </div>

          <div
            className={`Collapse__content ${
              openCollapse.includes(index) ? "Collapse__content--open" : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </>
  );
}

export default Collapse;
