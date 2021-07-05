function SideBar(props) {
  let sideBar = {
    emailBox: "jasonmtarka@gmail.com",
    huiText: "HUI",
    huiLink: "https://hui.co.jp/",
  };

  const text = {
    eng: {
      HomePageName: "Home",
      HomeDesc:
        "You can view this site's source code at the Github link below.  Also, you can see the source code for each page by following each page's code link.",
      HomeCodeText: "Website Code - Github",
      SudokuPageName: "Sudoku Solver",
      SudokuDesc:
        "A sudoku solver which uses recursion and backtracking to find the solution.",
      SudokuCodeText: "Sudoku Code - Github",
      SudokuComponentText: "Sudoku Form Component - Github",
      PassGenDesc:
        "A password generator which generates a random password based on user input, including which character sets to include, minimum amounts of numbers and symbols, and password length.",
      PassGenCodeText: "Password Logic - Github",
      PassGenComponentText: "Password Form Component - Github",
    },
    jp: {
      HomePageName: "ホームページ",
      HomeDesc:
        "本サイトのソースコードは以下のリンクを押せばご覧になります。また、各ページのコードリンクを押せば、そのページのソースコードが見えます。",
      HomeCodeText: "本サイトのソースコード・Github",
      SudokuPageName: "数独自動解決アプリ",
      SudokuDesc: "再帰のアルゴリズムにより、数独を自動的に解決するアプリ。",
      SudokuCodeText: "数独自動解決アプリのソースコード・Github",
      SudokuComponentText: "数独のReactコンポーネント・Github",
      PassGenPageName: "パスワード自動生成アプリ",
      PassGenDesc:
        "ユーザーの記入した情報に基づいて自動的にパスワードを作成するアプリ。",
      PassGenCodeText: "パスワードアプリのソースコード・Github",
      PassGenComponentText: "パスワードアプリのReactコンポーネント・Github",
    },
  };

  if (props.currentPage === "home") {
    sideBar["pageName"] =
      props.language === "jp" ? text.jp.HomePageName : text.eng.HomePageName;
    sideBar["description"] =
      props.language === "jp" ? text.jp.HomeDesc : text.eng.HomeDesc;
    sideBar["codeText"] =
      props.language === "jp" ? text.jp.HomeCodeText : text.eng.HomeCodeText;
    sideBar["codeLink"] = "https://github.com/JasonMTarka/React-Sample";
    //
  } else if (props.currentPage === "sudoku") {
    sideBar["pageName"] =
      props.language === "jp"
        ? text.jp.SudokuPageName
        : text.eng.SudokuPageName;
    sideBar["description"] =
      props.language === "jp" ? text.jp.SudokuDesc : text.eng.SudokuDesc;
    sideBar["codeText"] =
      props.language === "jp"
        ? text.jp.SudokuCodeText
        : text.eng.SudokuCodeText;
    sideBar["codeLink"] =
      "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/Logic/sudokuSolverLogic.js";
    sideBar["componentCodeText"] =
      props.language === "jp"
        ? text.jp.SudokuComponentText
        : text.eng.SudokuComponentText;
    sideBar["componentCodeLink"] =
      "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/sudokuForm.js";
    //
  } else if (props.currentPage === "passwordGen") {
    sideBar["pageName"] =
      props.language === "jp"
        ? text.jp.PassGenPageName
        : text.eng.PassGenPageName;
    sideBar["description"] =
      props.language === "jp" ? text.jp.PassGenDesc : text.eng.PassGenDesc;
    sideBar["codeText"] =
      props.language === "jp"
        ? text.jp.PassGenCodeText
        : text.eng.PassGenCodeText;
    sideBar["codeLink"] =
      "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/Logic/passwordGenLogic.js";
    sideBar["componentCodeText"] =
      props.language === "jp"
        ? text.jp.PassGenComponentText
        : text.eng.PassGenComponentText;
    sideBar["componentCodeLink"] =
      "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/PasswordForm.js";
  }

  let componentCode = [];
  if (sideBar.componentCodeLink) {
    componentCode.push(
      <li
        key="component-code-link"
        className="list-group-item list-group-item-light"
      >
        <a href={sideBar.componentCodeLink}>{sideBar.componentCodeText}</a>
      </li>
    );
  }

  return (
    <div>
      <div className="content-section">
        <ul key="sidebar-ul" className="list-group">
          <li
            key="sidebar-desc"
            className="list-group-item list-group-item-light"
          >
            <p key="desc">{sideBar.description}</p>
          </li>
          <li
            key="sidebar-code-link"
            className="list-group-item list-group-item-light"
          >
            <a key="code-link" href={sideBar.codeLink}>
              {sideBar.codeText}
            </a>
          </li>
          {componentCode}
          <li
            key="sidebar-hui-link"
            className="list-group-item list-group-item-light"
          >
            <a key="hui-link" href={sideBar.huiLink}>
              {sideBar.huiText}
            </a>
          </li>
          <li
            key="sidebar-email-link"
            className="list-group-item list-group-item-light"
          >
            {sideBar.emailBox}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
