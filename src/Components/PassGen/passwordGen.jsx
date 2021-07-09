import Form from "./Form";

function PasswordGen({language}) {
  const text = {
    eng: {
      title: "Password Generator",
      desc: "Select your options, then click 'Create Password' to generate your password.",
    },

    jp: {
      title: "パスワード自動生成アプリ",
      desc: "最初はオプションを選択し、そして「パスワードを作成する」というボタンを押してパスワードを作りましょう。",
    },
  };

  return (
    <div>
      <div>
        <h3>{language === "jp" ? text.jp.title : text.eng.title}</h3>
        <p>{language === "jp" ? text.jp.desc : text.eng.desc}</p>
      </div>
      <div>
        <Form language={language} />
      </div>
    </div>
  );
}

export default PasswordGen;
