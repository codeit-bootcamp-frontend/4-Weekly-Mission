import Header from "./Header";
import FolderContent from "./FolderContent";
import Footer from "./Footer";
import '../styles/reset.css';
import '../styles/folder.css';

function Folder(){
    return <>
        <Header/>
        <FolderContent/>
        <Footer/>
    </>
}

export default Folder;