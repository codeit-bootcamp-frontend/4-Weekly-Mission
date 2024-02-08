import { useState, useEffect } from "react";
import Input from "./Input";
import CardList from "./CardList";
import ContentHeader from "./ContentHeader";
import Category from "./Category";
import {API_PATH_USER_FOLDER, API_PATH_ALL_LINK, API_PATH_CATEGORY_LINK} from "../services/api-path";

const DEFAULT_CATEGORY = [{
        id: 0,
        name: "전체",
     }];

function FolderContent({handleKebab, kebabStatus}){
    const [categoryList, setCategoryList] = useState(DEFAULT_CATEGORY); // 유저가 가지고 있는 카테고리
    const [selectCategory, setSelectCategory] = useState({ // 현재 선택중인 카테고리
        id: 0,
        name: "전체"
    }) 
    const [linkList, setLinkList] = useState([]); // 유저가 가지고 있는 링크

    // 유저가 가지고 있는 카테고리 로드(데이터 통신, 첫 렌더링 시에만 실행)
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
    }, []);

    // 유저가 가지고 있는 전체 링크 로드(데이터 통신, 첫 렌더링 시에 실행, 전체 카테고리 클릭시 실행)
    const allLinkLoad = async() => {
        try{
            const response = await fetch(API_PATH_ALL_LINK, {
                method: "GET",
            });
            const result = await response.json();
            if(!response.ok){
                throw new Error("API 요청 에러 발생");
            }
            setLinkList(result.data);
            setSelectCategory({
                id: 0,
                name: "전체"
            })
        }catch(err){
            return console.log(err);
        }
    };

    useEffect(() => {
        allLinkLoad();
    }, []);

    // 카테고리 안에 있는 링크 로드( [전체] 카테고리 이외의 카테고리 클릭시 실행) 
    const handleSelectCategory = async(id, name) => {
        try{
            const response = await fetch(API_PATH_CATEGORY_LINK+id,{
                method: "GET",
            });
            const result = await response.json();
            if(!response.ok){
                throw new Error("API 요청 에러 발생");
            }
            setLinkList(result.data);
            setSelectCategory({
                id,
                name
            })
        }catch(err){
            return console.log(err);
        }
    } 
    
    const getClickArea = (e) => {
        if(e.target.className !== "content__kebab"){
            handleKebab(0);
        }
    }

    return (
        <main className="folder" onClick={(e) => getClickArea(e)}>
        <section className="link">
            <div className="link__box">
                <Input className="link__inputtext" type="text" placeholder="        링크를 추가해 보세요"/>
                <button className="link__add">추가하기</button>
            </div>
        </section>

        <section className="content"> 
            <Input className="content__search" type="search" placeholder="🔍   링크를 검색해 보세요."/>
            <Category categoryList={categoryList} selectCategory={selectCategory} allLinkLoad={allLinkLoad} handleSelectCategory={handleSelectCategory}/>
            <ContentHeader selectCategory={selectCategory}/>
            <CardList handleKebab={handleKebab} kebabStatus={kebabStatus} linkList={linkList} option={true} />
        </section>
    </main>
    )
}

export default FolderContent;