import { useState } from "react";
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import Body from "./Components/Body";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  //callback function for getting current page
  const updatePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavBar updatePage={updatePage} />
      <div className="container">
        <div className="row mt-3">
          <div className="col-7">
            <Body currentPage={currentPage} />
          </div>
          <div className="col-5 mt-3">
            <SideBar currentPage={currentPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
