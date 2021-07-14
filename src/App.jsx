import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { LANGUAGES, PAGES } from "./Text/defaults";
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import Body from "./Components/Body";

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);
  const [language, setLanguage] = useState(LANGUAGES.JP);

  //callback function for getting current page
  const updatePage = (page) => {
    setCurrentPage(page);
  };

  const updateLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <Router>
      <NavBar
        language={language}
        updateLanguage={updateLanguage}
        updatePage={updatePage}
      />
      <div className="container">
        <div className="row mt-3">
          <div className="col-7">
            <Body currentPage={currentPage} language={language} />
          </div>
          <div className="col-5 mt-3">
            <SideBar currentPage={currentPage} language={language} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
