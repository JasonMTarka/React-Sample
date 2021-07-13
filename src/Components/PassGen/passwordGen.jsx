import Form from "./Form";

const TEXT = {
  ENG_LANG : "eng",
  JP_LANG : "jp",
  ENG: {
    TITLE: "Password Generator",
    DESC: "Select your options, then click 'Create Password' to generate your password.",
  },

  JP: {
    TITLE: "パスワード自動生成アプリ",
    DESC: "最初はオプションを選択し、そして「パスワードを作成する」というボタンを押してパスワードを作りましょう。",
  },
};

export default function PasswordGen({language}) {
 
  return (
    <div>
      <div>
        <h3>{language === TEXT.JP_LANG ? TEXT.JP.TITLE : TEXT.ENG.TITLE}</h3>
        <p>{language === TEXT.JP_LANG ? TEXT.JP.DESC : TEXT.ENG.DESC}</p>
      </div>
      <div>
        <Form language={language} />
      </div>
    </div>
  );
}
