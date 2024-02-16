import { Page } from "./Pages/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}></Route>
          {/* path="/"를 정해줘야 하는 것 같은데 안내된 바가 없습니다ㅠ! 그래서 folder page를 /로 설정했습니다 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
