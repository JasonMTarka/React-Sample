import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { LANGUAGES, PAGES, SupportedLanguage } from "./Text/defaults";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Body from "./Components/Body";

function App() {
  const [currentPage, setCurrentPage] = useState<string>(PAGES.HOME);
  const [language, setLanguage] = useState<SupportedLanguage>(LANGUAGES.JP);

  //callback function for getting current page
  const updatePage = (page: string) => {
    setCurrentPage(page);
  };

  const updateLanguage = (language: SupportedLanguage) => {
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
            <Body language={language} />
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
