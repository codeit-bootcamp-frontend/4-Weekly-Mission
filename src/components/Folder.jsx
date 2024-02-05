import Header from "./Header";
import FolderContent from "./FolderContent";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";
import '../styles/reset.css';
import '../styles/folder.css';

function Folder(){
    return <>
        <Header/>
        <FolderContent/>
        <Footer/>
        <FloatingButton/>
    </>
}

export default Folder;