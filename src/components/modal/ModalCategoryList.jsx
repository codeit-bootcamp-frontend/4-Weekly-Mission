import ModalCheckIcon from "../../assets/Modal-check.svg";
import { useState } from "react";
function ModalCategoryList({categoryList}){
    const categoryListLoop = categoryList.slice(1); // 전체 카테고리는 제외
    const [selectCategory, setSelectCategory] = useState(null);

    const handleSelectCategory = (e) => {
        setSelectCategory(e.target.id);
    }

    return (
        <ul className="modal__category">
            {categoryListLoop.map(category => {
                const {id, name, link} = category;
                const isSelect = +selectCategory === id;
                return  <li
                    style={{
                        color: isSelect ? "#6D6AFE" : "#373740",
                        backgroundColor: isSelect ? "#F0F6FF" : "#FFFFFF"
                    }}
                    onClick={handleSelectCategory} key={id} id={id} className="modal__category--list">{name}
                    <span id={id} className="modal__category--count">{`${link.count}개 링크`}</span>
                    {isSelect && <img className="modal__category--selected" src={ModalCheckIcon}/>}
                </li>
            })}
        </ul>
    )
}

export default ModalCategoryList;