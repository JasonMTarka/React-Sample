function SideBar(props) {
  let sideBar = { emailBox: "jasonmtarka@gmail.com" };
  if (props.currentPage === "home") {
    sideBar["pageName"] = "Home";
    sideBar["box1Text"] = "Website Code";
    sideBar["box1Link"] = "Github URL";
    sideBar["box2Text"] = "Other Code";
    sideBar["box2Link"] = "Other URL";
    sideBar["box3Text"] = "Yet More Code";
    sideBar["box3LLink"] = "Yet Another URL";
  } else if (props.currentPage === "sudoku") {
    sideBar["pageName"] = "Sudoku Solver";
    sideBar["box1Text"] = "Sudoku Code";
    sideBar["box1Link"] = "Github URL";
    sideBar["box2Text"] = "Other Code";
    sideBar["box2Link"] = "Other URL";
    sideBar["box3Text"] = "Yet More Code";
    sideBar["box3Link"] = "Yet Another URL";
  } else if (props.currentPage === "passwordGen") {
    sideBar["pageName"] = "Password Generator";
    sideBar["box1Text"] = "Password Code";
    sideBar["box1Link"] = "Github URL";
    sideBar["box2Text"] = "Other Code";
    sideBar["box2Link"] = "Other URL";
    sideBar["box3Text"] = "Yet More Code";
    sideBar["box3Link"] = "Yet Another URL";
  }

  return (
    <div className="container">
      <div className="content-section">
        <h4>{sideBar.pageName}</h4>
        <ul className="list-group">
          <li className="list-group-item list-group-item-light">
            <a>{sideBar.box1Text}</a>
          </li>
          <li className="list-group-item list-group-item-light">
            <a>{sideBar.box2Text}</a>
          </li>
          <li className="list-group-item list-group-item-light">
            <a>{sideBar.box3Text}</a>
          </li>
          <li className="list-group-item list-group-item-light">
            <a>{sideBar.emailBox}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
