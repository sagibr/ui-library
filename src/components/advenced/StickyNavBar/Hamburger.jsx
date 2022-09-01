import { useState } from "react";
import Item from "../../basic/Item";
import "./css/hamburger.css";
const Hamburger = (props) => {
  const [showHamburger, setShowHamburger] = useState("Disabled");
  return (
    <div className="hamburgerContainer">
      <div className="hamburgerButtonContainer">
        <button
          className="hamburgerButtonContainer"
          onClick={() => {
            showHamburger === "Disabled"
              ? setShowHamburger("Active")
              : setShowHamburger("Disabled");
            props.navVisible === "visible"
              ? props.setNavVisible("unvisible")
              : props.setNavVisible("visible");
          }}
        >
          OPEN
        </button>
      </div>
      <div
        className={`hamburgerItemsContainer${showHamburger} hamburgerNetflix`}
      >
        {props.items.map((item, index) =>
          // if item is an array make a drop down list of links made of that array:
          Array.isArray(item) ? (
            <div key={index} className="dropdown">
              <div className="dropbtn">
                <Item
                  color={props.color}
                  title={item[0].title}
                  link={item[0].link}
                ></Item>
              </div>
              <div className="dropdown-content">
                {item.map((value, index2) =>
                  index2 > 0 ? (
                    <div key={index2}>
                      <Item
                        color={props.color}
                        index={index2}
                        title={value.title}
                        link={value.link}
                      ></Item>
                    </div>
                  ) : (
                    <></>
                  )
                )}
              </div>
            </div>
          ) : (
            // if not an array make a regular link:
            <div key={index}>
              <Item
                color={props.color}
                index={index}
                title={item.title}
                link={item.link}
              ></Item>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Hamburger;
