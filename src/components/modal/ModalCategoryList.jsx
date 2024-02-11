import ModalCheckIcon from "../../assets/Modal-check.svg";
import { useState } from "react";
function ModalCategoryList({categoryList}){
    const categoryListLoop = categoryList.slice(1); // 전체 카테고리는 제외
    const [selectCategory, setSelectCategory] = useState(null);
    return (
        <ul className="modal__category">
            {categoryListLoop.map(category => {
                const {id, name, link} = category;
                return  <li key={id} className="modal__category--list">{name}
                    <span className="modal__category--count">{`${link.count}개 링크`}</span>
                </li>
            })}
        </ul>
    )
}

export default ModalCategoryList;