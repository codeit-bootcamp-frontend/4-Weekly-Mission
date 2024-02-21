import Header from "../../components/common/Header";
import { useRecoilValueLoadable } from "recoil";
import { folderUser } from "../../store/store";
import AddLink from "./AddLink";
import SearchInput from "../../components/form/SearchInput";
import FolderButton from "./FolderButton";
import FolderTitle from "./folderTitle";
import FolderContents from "./FolderContents";
import Modal from "../../components/modal/modal";
import { useState } from "react";

const ModalName = {
    add: {
        name: "폴더 추가",
        buttonColor:"blue",
        buttonName: "추가하기",
    },
    share: {
        name: "폴더 공유",
        buttonColor:"",
        buttonName: "",
    },
    change: {
        name: "폴더 이름 변경",
        buttonColor:"blue",
        buttonName: "변경하기",
    },
    delete: {
        name: "폴더 삭제",
        buttonColor:"red",
        buttonName: "삭제하기",
    },
}


function Folder() {
    const {contents} = useRecoilValueLoadable(folderUser);
    const data = contents?.data?.[0];

    const [name, setName] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [buttonColor, setButtonColor] = useState("");
    const [buttonName, setButtonName] = useState("");
    

    return(
        <>
            {
                openModal ? <Modal name={name} setOpenModal={setOpenModal} buttonColor={buttonColor} buttonName={buttonName}/> : null
            }
            <Header contents={data} userImg='image_source'/>
            <AddLink/>
            <main>
                <div className='container'>
                    <SearchInput/>
                    <FolderButton setName={setName} setOpenModal={setOpenModal} setButtonColor={setButtonColor} setButtonName={setButtonName} modalName={ModalName}/>
                    <FolderTitle setName={setName} setOpenModal={setOpenModal} setButtonColor={setButtonColor} setButtonName={setButtonName} modalName={ModalName}/>
                    <FolderContents/>
                </div>
            </main>
        </>
    )
}

export default Folder;