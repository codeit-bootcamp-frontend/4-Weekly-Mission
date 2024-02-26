import styled from "styled-components";
import FooterBlock from "../components/Footer";
import HeaderBlock from "../components/Header";
import LinkAddInput from "../components/LinkAddInput";
import SearchInput from "../components/SearchInput";
import './Folder.css'
import {  useCallback, useEffect, useReducer, useState } from "react";
import { folderLinkDataApi, folderListDataApi  } from "../api";
import CategoryBar from "../components/CategoryBar";
import { useParams } from "react-router-dom";
import shareIcon from '../img/share.png';
import penIcon from '../img/pen.png';
import deletIcon from '../img/delet.png';
import LinkCard from "../components/LinkCard";
import ModalLayout from "../components/ModalLayout.js"

const NotLink = styled.div`
    font-size : 1.6rem;
    text-align :center;
    font-weight : 400;
    flex: 1;
   
    
`;

const CurrentCategory = styled.div`
    max-width : 106rem;
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin : auto;
    h2{
        font-size : 2.4rem;
        font-weight : 600;
        color : #000;
    }
    @media (max-width : 790px){
        &{
            flex-direction : column;
            align-items:flex-start;
            gap:1.2rem;
        }
    }
`;

const FunctionsBox = styled.div`
    display : flex;
    gap: 12px;
    visibility : ${({visibility}) => visibility === '전체' ? 'hidden' : 'visible'};
`;

const FunctionBtn = styled.button`
    outline : none;
    background : transparent;
    border : none;
    font-size : 1.4rem;
    font-weight : 600;
    color : #9FA6B2;
    display : flex;
    align-items : center;
    cursor: pointer;
    gap : 3px;
`;

const reducer = (state, action) => {
    if(action.state) {
        switch (action.type) {
            case 'Edit' : 
                return ({...action});
            case 'Delete' :
                return ({...action});
            case 'Share' : 
                return ({...action});
            case 'AddAtFolder' : 
                return ({...action})
        }
    }else{
        return ({state : false})
    }
}


function Folder() {
    const [categoryData, setCategoryData] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('');
    const [folderLinkList, setFolderLinkList] = useState([]);
    const params = useParams();
    const [handleModal, dispatch] = useReducer(reducer, {state : false})

    const getFolderListData = async () => {
        const response = await folderListDataApi();
        setCategoryData(response.data);

    }
    

    const getFolderLinkData = async (folderId) => {
        const response = await folderLinkDataApi(folderId);
        const data = response.data;
        const filterData = data.filter(link => {
            return link.folder_id === folderId
        });
        setFolderLinkList(filterData);
    }

    useEffect(() => { 
        getFolderListData();
    }, []);


    useEffect(() => {
        const folderId = params.folderId === 'all' || NaN ? null : params.folderId;
        getFolderLinkData(folderId);
    }, [currentCategory])

    const onClickCategory = (category) => {
        setCurrentCategory(category);
    }
   
   
  
    return (
        <>
            <HeaderBlock />
            <main id="main">
                <section className="section owner-information">
                    <LinkAddInput />
                </section>
                <section className="section linkcards">
                    <div className="container">
                        <SearchInput />
                        <div className="wrap"> 
                            <CategoryBar categoryList={categoryData} onClick={onClickCategory} dispatch={dispatch}/>
                            <CurrentCategory>
                                <h2>{currentCategory}</h2>
                                <FunctionsBox visibility={currentCategory}>
                                    <FunctionBtn onClick={() => {dispatch({state : true, type : 'Share', folderName : currentCategory})}}>
                                        <img src={shareIcon} alt="공유 아이콘" />
                                        공유
                                    </FunctionBtn>
                                    <FunctionBtn onClick={() => {dispatch({state : true, type : 'Edit', title : '폴더 이름 변경', buttonText : '변경하기', placeHolder : '변경 이름 입력'})}}>
                                        <img src={penIcon} alt="수정 아이콘" />
                                        이름 변경
                                    </FunctionBtn>
                                    <FunctionBtn onClick={() => {dispatch({state : true, type : 'Delete', title : '폴더 삭제', deleteTarget : currentCategory})}}>
                                        <img src={deletIcon} alt="삭제 아이콘" />
                                        삭제
                                    </FunctionBtn>
                                </FunctionsBox>
                            </CurrentCategory>
                            <ul className="linkcard-list">
                                {folderLinkList.length ?
                                    folderLinkList.map(link => {
                                        return (
                                            <LinkCard linkData={link} key={link.id} dispatch={dispatch}>
                                            </LinkCard>
                                        )
                                    }) : 
                                    <NotLink>저장된 링크가 없습니다</NotLink>
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <FooterBlock />
            <ModalLayout modalState={handleModal} dispatch={dispatch} folderList={categoryData}/>
        </>
    )
}

export default Folder;