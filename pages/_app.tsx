import ButtonCta from "@/src/components/Cta/buttonCta";
import "/styles/globals.scss";
import {ChangeEvent, useState} from "react";
import Input from "@/src/components/input/input";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const test: any = {
    display: "flex",
    gap: "30px",
    flexDirection: "column",
    margin: "20px",
  };
  return (
    <div style={test}>
      <Input value={email} onChange={handleEmailChange} type="text" htmlFor="email" />
      <Input value={password} onChange={handlePasswordChange} type="password" htmlFor="password" />
    </div>
  );
}
export default App;

/*이거 지워도 되는건가요?
import type {AppProps} from "next/app";
function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}*/
