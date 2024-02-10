import Header from "../components/Header/Header";
import FolderContent from "../components/Folder/FolderContent";
import Footer from "../components/Footer/Footer";
import FloatingButton from "../components/Folder/FloatingButton";
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
            setKebabStatus(0);
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