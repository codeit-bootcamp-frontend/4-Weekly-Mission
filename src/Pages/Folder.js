import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Avatar from "../Components/Avatar";
import "./css/Folder.css";
import SearchBar from "../Components/SearchBar";

const Folder = () => {
  return (
    <>
      <Header isSigned={true} />
      <div className="folder-info">
        <div className="folder-owner">
          <Avatar
            avatarImage="icons/default_user_icon.svg"
            width="60px"
            height="60px"
          ></Avatar>
          <div className="font-thin font-16px">@코드잇</div>
        </div>
        <div className="font-regular font-40px">즐겨찾기</div>
      </div>
      <main>
        <SearchBar />
      </main>
      <Footer />
    </>
  );
};

export default Folder;
