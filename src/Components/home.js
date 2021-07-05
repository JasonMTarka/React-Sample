function Home(props) {
  const text = {
    eng: {
      about: "About this Site",
      p1: "This is a sample React website created by Jason Tarka at HUI.",
      p2: "This is a Single Page Application (SPA) using React components to dynamically display data without repeated HTTP requests.",
      p3: "By clicking the buttons on the navigation bar above, you can load new components into this space. As an example, I have included some small applications I created for learning purposes",
      p4: "The formatting for this website is done through Bootstrap, an open-source CSS framework.",
    },
    jp: {
      about: "本サイトについて",
      p1: "本サイトは株式会社エイチューアイのジェイソン・ターカが作成したものです。",
      p2: "本サイトは Single Page Application（SPA)という仕組みで作られて、Reactの特徴であるコンポーネント（Component)を利用することで、普通のサイトほど複数のHTTPリクエストを送信する必要がないサイトです。",
      p3: "上のナビゲーションバーのボタンを押すことで、ここで新しいコンポーネントを見ることができます。例として、私が作成した小さなアプリを本サイトに実装しておきました。よろしければご覧ください。",
      p4: "本サイトの見た目はBootstrapというオープンソースのCSSフレームワークで調整されています。",
    },
  };

  return (
    <div className="container">
      <h3 key="about">
        {props.language === "jp" ? text.jp.about : text.eng.about}
      </h3>
      <p key="1">{props.language === "jp" ? text.jp.p1 : text.eng.p1}</p>
      <p key="2">{props.language === "jp" ? text.jp.p2 : text.eng.p2}</p>
      <p key="3">{props.language === "jp" ? text.jp.p3 : text.eng.p3}</p>
      <p key="4">{props.language === "jp" ? text.jp.p4 : text.eng.p4}</p>
    </div>
  );
}

export default Home;
