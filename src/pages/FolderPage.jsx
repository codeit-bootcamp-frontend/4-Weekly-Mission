import Header from "../components/header/Header";
import FolderContent from "../components/folder/FolderContent";
import Footer from "../components/footer/Footer";
import FloatingButton from "../components/folder/FloatingButton";
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