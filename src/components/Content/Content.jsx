import CardList from "../card/CardList";
import ContentHeader from "./ContentHeader";
import Category from "../category/Category";

function Content({categoryList, selectCategory, allLinkLoad, handleSelectCategory, handleKebab, kebabStatus, linkList, option}){
    return (
        <section className="content"> 
            <input className="content__search" type="search" placeholder="🔍   링크를 검색해 보세요."/>
            {option && <Category categoryList={categoryList} selectCategory={selectCategory} allLinkLoad={allLinkLoad} handleSelectCategory={handleSelectCategory}/>}
            {option && <ContentHeader selectCategory={selectCategory}/>}
            <CardList handleKebab={handleKebab} kebabStatus={kebabStatus} linkList={linkList} option={option} />
        </section>
    )
}

export default Content;