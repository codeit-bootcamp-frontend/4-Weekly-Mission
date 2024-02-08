import Header from "./Header";
import FolderContent from "./FolderContent";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";
import '../styles/reset.css';
import '../styles/folder.css';
import { useState } from "react";

let prevId = 999;  
function Folder(){
    const [kebabStatus, setKebabStatus] = useState(0);

    const handleKebab = (id) => {
        if(prevId !== id){
            setKebabStatus(id);
            prevId = id;
        }else{
            setKebabStatus(0)
            prevId = 999;
        }
        
    }
    return <>
        <Header/>
        <FolderContent handleKebab={handleKebab} kebabStatus={kebabStatus}/>
        <Footer/>
        <FloatingButton/>
    </>
}

export default Folder;