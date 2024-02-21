import Header from "../components/Header";
import { useGetUser } from "../apis/User";

function Folder() {
  const {name, email, profileImageSource} = useGetUser();
  const user = {name, email, profileImageSource};
  console.log(user);
  return (
    <div>
      <Header user={user}/>
      <h1>Folder</h1>
    </div>
  );
}

export default Folder;