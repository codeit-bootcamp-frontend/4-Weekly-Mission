// 메인페이지 => index.js 안으로 App.js 페이지를 넣어서 동작

import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

const App = () => {
  return (
    <Fragment>
      <Header className="header" />
      <Main />
      <Footer className="footer" />
    </Fragment>
  );
};

export default App;
