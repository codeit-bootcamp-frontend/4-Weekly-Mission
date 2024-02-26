import styled from "styled-components"
import { useEffect, useState } from "react"
import ModalFolderEdit from "./ModalFolderEdit";
import ModalDelete from "./ModalDelete";
import ModalShare from "./ModalShare";
import ModalLinkAdd from "./ModalLinkAdd";




const Layout = styled.div`
    width : 100%;
    height : 100vh;
    background-color : rgba(0,0,0,.4);
    position : fixed;
    top:0;
    left:0;
    z-index : 10000;
    display : ${({state}) => state ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
`;




function ModalLayout ({modalState, dispatch, folderList}) {
    
    return(
        <Layout state={modalState.state}>
            <ModalFolderEdit type={modalState} dispatch={dispatch}></ModalFolderEdit>
            <ModalDelete type={modalState} dispatch={dispatch}></ModalDelete>
            <ModalShare type={modalState} dispatch={dispatch}></ModalShare>
            <ModalLinkAdd type={modalState} dispatch={dispatch} folderList={folderList}></ModalLinkAdd>
        </Layout>
    )
}

export default ModalLayout; 