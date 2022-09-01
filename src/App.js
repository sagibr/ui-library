import "./App.css";
import StickyNavBar from "./components/advenced/StickyNavBar/StickyNavBar.jsx";

function App() {
  return (
    <div className="body">
      <StickyNavBar
        color="netflix"
        logo="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
        title="SAGI!"
        items={[
          { title: "Home", link: "https://collectui.com/" },
          {
            title: "About",
            link: "https://docs.google.com/document/d/18d4jLvp_MWUaEVTM0qS9IpCAKdUYEvkgJfZUgZ1enI4/edit",
          },

          [
            {
              title: "Products",
              link: "https://docs.google.com/document/d/18d4jLvp_MWUaEVTM0qS9IpCAKdUYEvkgJfZUgZ1enI4/edit",
            },
            {
              title: "Ipad",
              link: "https://docs.google.com/document/d/18d4jLvp_MWUaEVTM0qS9IpCAKdUYEvkgJfZUgZ1enI4/edit",
            },
            {
              title: "Iphone",
              link: "https://docs.google.com/document/d/18d4jLvp_MWUaEVTM0qS9IpCAKdUYEvkgJfZUgZ1enI4/edit",
            },
          ],
        ]}
        logoAndTitleOrder={3}
        itemsOrder={1}
        searchOrder={2}
        // haveSearch={false}
        // haveLogo={false}
        // haveTitle={false}
      ></StickyNavBar>
    </div>
  );
}

export default App;
