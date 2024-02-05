import AddImg from "../assets/add.svg";
import { useState, useEffect, useCallback } from "react";
import Cards from "./Cards";
import UtilList from "./UtilList";
import {API_PATH_USER_FOLDER, API_PATH_ALL_LINK, API_PATH_CATEGORY_LINK} from "../services/api-path";


const DEFAULT_CATEGORY = [{
        id: 0,
        name: "전체",
     }];
     
function FolderContent(){
    const [categoryList, setCategoryList] = useState(DEFAULT_CATEGORY);
    const [selectCategory, setSelectCategory] = useState(0);
    const [viewCategory, setViewCategory] = useState("전체"); 
    const [linkList, setLinkList] = useState([]);

    useEffect(() => {
        const userCategoryLoad = async() => {
            try{
                const response = await fetch(API_PATH_USER_FOLDER, {
                    method: "GET",
                });
                const result = await response.json();
                if(!response.ok){
                    throw new Error("API 요청 에러 발생");
                }
                setCategoryList([...categoryList, ...result.data]);
            }catch(err){
                console.log(err);
            }
        };
        userCategoryLoad();
    }, [])

    const allLinkLoad = useCallback(async() => {
        try{
            const response = await fetch(API_PATH_ALL_LINK, {
                method: "GET"
            });
            const result = await response.json();
            if(!response.ok){
                throw new Error("API 요청 에러 발생");
            }
            setLinkList(result.data);
            setSelectCategory(0);
            setViewCategory("전체");
        }catch(err){
            return console.log(err);
        }
    }, []);

    useEffect(() => {
        allLinkLoad();
    }, []);

    const handleViewCategory = async(id, name) => {
        try{
            const response = await fetch(API_PATH_CATEGORY_LINK(id),{
                method: "GET"
            });
            const result = await response.json();
            if(!response.ok){
                throw new Error("API 요청 에러 발생");
            }
            setLinkList(result.data);
            setSelectCategory(id);
            setViewCategory(name);
        }catch(err){
            return console.log(err);
        }
    } 
    
    // const handleKebabClick = (e) => {
    //     if(e.target.className !== "content__kebab"){
    //         setKebabClick(false);
    //     }
    // }
    
    return (
        <main className="folder">
        <section className="link">
            <div className="link__box">
                <input className="link__inputtext" type="text" placeholder="        링크를 추가해 보세요"/>
                <button className="link__add">추가하기</button>
            </div>
        </section>

        <section className="content"> 
            <input className="content__search" type="search" placeholder="🔍   링크를 검색해 보세요."/>
            <div className="content__category">
                <ul className="category__box">
                    {categoryList.map(category => {
                        const isSelect = selectCategory === category.id;
                        return <li onClick={
                            () => category.id === 0 ? allLinkLoad() : handleViewCategory(category.id, category.name)} 
                            style={{
                                backgroundColor: isSelect ? "#6D6AFE" : "#FFFFFF",
                                color: isSelect ? "#FFFFFF" : "#000000",
                            }} key={category.id} className="category__list">{category.name}</li>
                    })}
                </ul>
                <div className="category__add">
                    <span className="category__addText">폴더 추가</span>
                    <img className="category__addImg" src={AddImg} alt="폴더 추가 아이콘"/>
                </div>
            </div>

            <div className="content__header">
                <p className="content__title">{viewCategory}</p>
                <ul 
                style={{
                    display: viewCategory === "전체" ? "none" : "flex",
                }}
                className="content__util">
                    <UtilList value="share" text="공유"/>
                    <UtilList value="modify" text="수정"/>
                    <UtilList value="delete" text="삭제"/>
                </ul>
            </div>
            <Cards linkList={linkList} option={true}/>
        </section>
    </main>
    )
}

export default FolderContent;