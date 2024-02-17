import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import SharedPage from "./Pages/SharedPage";

function Main() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/shared" element={<SharedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main;