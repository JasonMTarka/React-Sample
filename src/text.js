export const TEXT = {
  JP_LANG: "jp",
  ENG_LANG: "eng",

  PASS_GEN: {
    ENG: {
      TITLE: "Password Generator",
      DESC: "Select your options, then click 'Create Password' to generate your password.",
      LOWERCASE: "Lowercase",
      UPPERCASE: "Uppercase",
      NUMBERS: "Numbers",
      SYMBOLS: "Symbols",
      MIN_NUMS: "Minimum Amount of Numbers",
      MIN_SYMS: "Minimum Amount of Symbols",
      PASS_LEN: "Password Length",
      WAITING: "",
      CREATE_PASS: "Create Password",
      COPY_PASS: "Copy Password",
      COPY_ALERT: "Your password has been copied!",
      ERR_LEN:
        "Invalid length: increase your minimum values or password length.",
      ERR_OPT: "Please choose at least one option.",
    },
    JP: {
      TITLE: "パスワード自動生成アプリ",
      DESC: "最初はオプションを選択し、そして「パスワードを作成する」というボタンを押してパスワードを作りましょう。",
      LOWERCASE: "小文字",
      UPPERCASE: "大文字",
      NUMBERS: "数字",
      SYMBOLS: "記号",
      MIN_NUMS: "数字の最小限",
      MIN_SYMS: "記号の最小限",
      PASS_LEN: "パスワードの長さ",
      WAITING: "",
      CREATE_PASS: "パスワードを作成する",
      COPY_PASS: "パスワードをコピーする",
      COPY_ALERT: "パスワードは無事にコピーされました！",
      ERR_LEN: "パスワードは短すぎます。長さ又は最小限を上げてください。",
      ERR_OPT: "上記の選択肢を少なくとも１つお選びください。",
    },
  },

  SUDOKU: {
    ENG: {
      TITLE: "Sudoku Solver",
      DESC: "Choose a difficulty below and press 'Solve' to begin recursive solving of the sudoku.",
      SOLVE: "Solve",
      RESET: "Reset",
    },
    JP: {
      TITLE: "数独自動解決アプリ",
      DESC: "オプションメニューから難易度を選択し、「解決する」ボタンを押して数独の自動解決を見ましょう。",
      SOLVE: "解決する",
      RESET: "リセット",
    },
  },

  HOME: {
    ENG: {
      ABOUT: "About this Site",
      P1: "This is a sample React website created by Jason Tarka at HUI.",
      P2: "This is a Single Page Application (SPA) using React components to dynamically display data without repeated HTTP requests.",
      P3: "By clicking the buttons on the navigation bar above, you can load new components into this space. As an example, I have included some small applications I created for learning purposes",
      P4: "The formatting for this website is done through Bootstrap, an open-source CSS framework.",
    },
    JP: {
      ABOUT: "本サイトについて",
      P1: "本サイトは株式会社エイチューアイのジェイソン・ターカが作成したものです。",
      P2: "本サイトは Single Page Application（SPA)という仕組みで作られて、Reactの特徴であるコンポーネント（Component)を利用することで、普通のサイトほど複数のHTTPリクエストを送信する必要がないサイトです。",
      P3: "上のナビゲーションバーのボタンを押すことで、ここで新しいコンポーネントを見ることができます。例として、私が作成した小さなアプリを本サイトに実装しておきました。よろしければご覧ください。",
      P4: "本サイトの見た目はBootstrapというオープンソースのCSSフレームワークで調整されています。",
    },
  },

  SIDEBAR: {
    ENG: {
      HOME_PAGE_NAME: "Home",
      HOME_DESC:
        "You can view this site's source code at the Github link below.  Also, you can see the source code for each page by following each page's code link.",
      HOME_CODE_TEXT: "Website Code - Github",
      SUDOKU_PG_NAME: "Sudoku Solver",
      SUDOKU_DESC:
        "A sudoku solver which uses recursion and backtracking to find the solution.",
      SUDOKU_CODE_TEXT: "Sudoku Code - Github",
      SUDOKU_COMP_TEXT: "Sudoku Form Component - Github",
      PASS_DESC:
        "A password generator which generates a random password based on user input, including which character sets to include, minimum amounts of numbers and symbols, and password lENGth.",
      PASS_CODE_TEXT: "Password Logic - Github",
      PASS_COMP_TEXT: "Password Form Component - Github",
    },
    JP: {
      HOME_PAGE_NAME: "ホームページ",
      HOME_DESC:
        "本サイトのソースコードは以下のリンクを押せばご覧になります。また、各ページのコードリンクを押せば、そのページのソースコードが見えます。",
      HOME_CODE_TEXT: "本サイトのソースコード・Github",
      SUDOKU_PG_NAME: "数独自動解決アプリ",
      SUDOKU_DESC: "再帰のアルゴリズムにより、数独を自動的に解決するアプリ。",
      SUDOKU_CODE_TEXT: "数独自動解決アプリのソースコード・Github",
      SUDOKU_COMP_TEXT: "数独のReactコンポーネント・Github",
      PassGenPageName: "パスワード自動生成アプリ",
      PASS_DESC:
        "ユーザーの記入した情報に基づいて自動的にパスワードを作成するアプリ。",
      PASS_CODE_TEXT: "パスワードアプリのソースコード・Github",
      PASS_COMP_TEXT: "パスワードアプリのReactコンポーネント・Github",
    },
  },

  NAVBAR: {
    ENG: {
      HOME: "Home",
      SUDOKU: "Sudoku Solver",
      PASS_GEN: "Password Generator",
    },
    JP: {
      HOME: "ホームページ",
      SUDOKU: "数独自動解決アプリ",
      PASS_GEN: "パスワード自動生成アプリ",
    },
  },
};
