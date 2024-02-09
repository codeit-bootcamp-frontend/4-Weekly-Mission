import logo from "./logo.svg";
import "./App.css";
import "./style/global.css";

import { MainPage } from "./page/mainPage";
import { MainLayout } from "./layout/main/mainLayout";
function App() {
  return (
    <MainLayout>
      <MainPage />
    </MainLayout>
  );
}

export default App;
