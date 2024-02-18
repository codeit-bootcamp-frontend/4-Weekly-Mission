import styled from "styled-components";
import FooterBlock from "../components/Footer";
import HeaderBlock from "../components/Header";
import LinkAddInput from "../components/LinkAddInput";
import SearchInput from "../components/SearchInput";
import './Folder.css'
import { useCallback, useEffect, useState } from "react";
import { requestFolderLinkData, requestFolderListData } from "../api";
import CategoryBar from "../components/CategoryBar";
import { useNavigate, useParams } from "react-router-dom";
import shareIcon from '../img/share.png';
import penIcon from '../img/pen.png';
import deletIcon from '../img/delet.png';
import LinkCard from "../components/LinkCard";


const NotLink = styled.div`
    font-size : 1.6rem;
    text-align :center;
    font-weight : 400;
    flex: 1;
`;

const CurrentCategory = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    h2{
        font-size : 2.4rem;
        font-weight : 600;
        color : #000;
    }
`;

const FunctionsBox = styled.div`
   
    display : flex;
    gap: 12px;
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

function Folder() {
    const [categoryData, setCategoryData] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('');
    const [folderLinkList, setFolderLinkList] = useState([]);
    const params = useParams();


    const getFolderListData = async () => {
        const response = await requestFolderListData();
        const data = response.data;
        setCategoryData(data);
    }
    
    const getFolderLinkData = async (folderId) => {
        const response = await requestFolderLinkData(folderId);
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
                            <CategoryBar categoryList={categoryData} onClick={onClickCategory} />
                            <CurrentCategory>
                                <h2>{currentCategory}</h2>
                                <FunctionsBox>
                                    <FunctionBtn>
                                        <img src={shareIcon} alt="공유 아이콘" />
                                        공유
                                    </FunctionBtn>
                                    <FunctionBtn>
                                        <img src={penIcon} alt="수정 아이콘" />
                                        이름 변경
                                    </FunctionBtn>
                                    <FunctionBtn>
                                        <img src={deletIcon} alt="삭제 아이콘" />
                                        삭제
                                    </FunctionBtn>
                                </FunctionsBox>
                            </CurrentCategory>
                            <ul className="linkcard-list">
                                {folderLinkList.length ?
                                    folderLinkList.map(link => {
                                        return (
                                            <LinkCard linkData={link} key={link.id}>
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
        </>
    )
}

export default Folder;