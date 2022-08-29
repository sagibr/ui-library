import Item from "./Item";
import Logo from "./Logo";
import Search from "./Search";
import Title from "./Title";
import "./css/stickyNavBar.css";

const StickyNavBar = (props) => {
  return (
    <nav className={`navBarContainer ${props.color}`}>
      <div className="logoAndTitleContainer">
        {/* if useLogo is not false set logo to the url from the logo prop */}
        {props.useLogo !== false ? <Logo logo={props.logo}></Logo> : <></>}

        {/* if useTitle is not false set title to the string from the title prop */}
        {props.useTitle !== false ? <Title title={props.title}></Title> : <></>}
      </div>
      {/* go over an array of object that every object has prop of title and link and create links from each object */}
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

      {/* if useSearch is not false show search bar */}
      {props.useSearch !== false ? (
        <Search color={props.color}></Search>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default StickyNavBar;
