import React from "react";
import ReactDOM from "react-dom/client";
import Main from "Main";
import "assets/css/global.css";
import {UserProvider} from "context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Main />
    </UserProvider>
  </React.StrictMode>
);
