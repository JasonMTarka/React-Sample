function SideBar(props) {
  let sideBar = {
    emailBox: "jasonmtarka@gmail.com",
    huiText: "HUI",
    huiLink: "https://hui.co.jp/",
  };

  if (props.currentPage === "home") {
    sideBar["pageName"] = "Home";
    sideBar["description"] =
      "You can view this site's source code at the Github link below.  Also, you can see the source code for each page by following each page's code link.";
    sideBar["codeText"] = "Website Code - Github";
    sideBar["codeLink"] =
      "https://github.com/JasonMTarka/React-Sample/tree/main/src";
    //
  } else if (props.currentPage === "sudoku") {
    sideBar["pageName"] = "Sudoku Solver";
    sideBar["description"] =
      "A sudoku solver which uses recursion and backtracking to find the solution.";
    sideBar["codeText"] = "Sudoku Code - Github";
    sideBar["codeLink"] =
      "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/sudokuForm.js";
    sideBar["componentCodeText"] = "Sudoku Form Component - Github";
    sideBar["componentCodeLink"] =
      "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/sudokuForm.js";
    //
  } else if (props.currentPage === "passwordGen") {
    sideBar["pageName"] = "Password Generator";
    sideBar["description"] =
      "A password generator which generates a random password based on user input, including which character sets to include, minimum amounts of numbers and symbols, and password length. The copy password button enables users to copy the generated password for ease of use.";
    sideBar["codeText"] = "Password Logic - Github";
    sideBar["codeLink"] =
      "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/Logic/passwordGenLogic.js";
    sideBar["componentCodeText"] = "Password Form Component - Github";
    sideBar["componentCodeLink"] =
      "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/PasswordForm.js";
  }

  let componentCode = [];
  if (sideBar.componentCodeLink) {
    componentCode.push(
      <li className="list-group-item list-group-item-light">
        <a href={sideBar.componentCodeLink}>{sideBar.componentCodeText}</a>
      </li>
    );
  }

  return (
    <div className="container">
      <div className="content-section">
        <ul className="list-group">
          <li className="list-group-item list-group-item-light">
            <p>{sideBar.description}</p>
          </li>
          <li className="list-group-item list-group-item-light">
            <a href={sideBar.codeLink}>{sideBar.codeText}</a>
          </li>
          {componentCode}
          <li className="list-group-item list-group-item-light">
            <a href={sideBar.huiLink}>{sideBar.huiText}</a>
          </li>
          <li className="list-group-item list-group-item-light">
            {sideBar.emailBox}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
