import Header from "../components/header/Header";
import FolderContent from "../components/folder/FolderContent";
import Footer from "../components/footer/Footer";
import FloatingButton from "../components/folder/FloatingButton";
import Modal from "../components/modal/Modal";
import '../styles/folder.css';
import { useState } from "react";

let prevId = 999;  
const DEFAULT_CATEGORY = [{
    id: 0,
    name: "전체",
}];
function Folder(){
    const [kebabStatus, setKebabStatus] = useState(0);
    const [categoryList, setCategoryList] = useState(DEFAULT_CATEGORY); // 유저가 가지고 있는 카테고리
    const [modalAction, setModalAction] = useState("");

    const handleKebab = (id) => {
        if(prevId !== id){
            setKebabStatus(id);
            prevId = id;
        }else{
            setKebabStatus(0);
            prevId = 999;
        }    
    }
    
    const folderContentProps = {
        handleKebab,
        kebabStatus,
        categoryList,
        setCategoryList,
        setModalAction
    }
    return <>
        <Header/>
        <FolderContent {...folderContentProps}/>
        <Footer/>
        <FloatingButton/>
        <Modal modalAction={modalAction} categoryList={categoryList}/>
    </>
}

export default Folder;