import AddImg from "../assets/add.svg";
function CategoryAddButton(){
    return(
        <div className="category__add">
            <span className="category__addText">폴더 추가</span>
            <img className="category__addImg" src={AddImg} alt="폴더 추가 아이콘"/>
        </div>
    )
}

export default CategoryAddButton;