import styled from "styled-components"
import { useEffect, useState } from "react"
import ModalFolderEdit from "./ModalFolderEdit";
import ModalDelete from "./ModalDelete";




const Layout = styled.div`
    width : 100%;
    height : 100vh;
    background-color : rgba(0,0,0,.4);
    position : fixed;
    top:0;
    left:0;
    z-index : 10000;
    display : flex;
    justify-content:center;
    align-items:center;
`;




function ModalLayout () {
    
    return(
        <Layout>
            <ModalFolderEdit></ModalFolderEdit>
            {/* <ModalDelete></ModalDelete> */}
        </Layout>
    )
}

export default ModalLayout; 