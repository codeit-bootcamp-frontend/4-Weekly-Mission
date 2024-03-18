import AddLink from "./components/AddLink/addLink";
import Card from "./components/Card/index";
import Gnb from "./components/Gnb/gnb";
import Input from "./components/input/input";
import {useState} from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const test = {
    display: "flex",
    gap: "30px",
    flexDirection: "column",
    margin: "20px",
  };

  return (
    <div style={test}>
      <Card></Card>
      <AddLink />
      <Gnb login={true} />
      <Gnb login={false} />
      <Input value={email} onChange={handleEmailChange} type="text" htmlFor="email" />
      <Input value={password} onChange={handlePasswordChange} type="password" htmlFor="password" />
    </div>
  );
}
export default App;
