import AddImg from "../../assets/add.svg";
function CategoryAddButton({setModalAction}){
    const handleModalAction = () => {
        setModalAction({
            isView: true,
            action: "폴더 추가",
            subTitle: ""
        })
    }
    return(
        <div className="category__add" onClick={handleModalAction}>
            <span className="category__addText">폴더 추가</span>
            <img className="category__addImg" src={AddImg} alt="폴더 추가 아이콘"/>
        </div>
    )
}

export default CategoryAddButton;