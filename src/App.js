import AddLink from "./components/AddLink/addLink";
import Gnb from "./components/Gnb/gnb";
import Input from "./components/input/input";

function App() {
  const test = {
    display: "flex",
    gap: "30px",
    flexDirection: "column",
  };
  return (
    <div style={test}>
      <AddLink />
      <Gnb login={true} />
      <Gnb login={false} />
      <Input />
    </div>
  );
}
export default App;
