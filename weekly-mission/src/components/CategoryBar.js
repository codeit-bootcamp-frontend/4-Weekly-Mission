import styled from "styled-components"
import { NavLink } from "react-router-dom";
 
 
 
const CategoryBarBlock = styled.div`
      width : 106rem;
      margin : 0 auto;
      display : flex;
      justify-content : space-between;
      /* background-color : red; */

      .add-folder-btn{
        outline : none;
        border: none;
        color: #6D6AFE;
        font-size : 1.6rem;
        background-color : transparent;
        cursor: pointer;
      }
`;


const CategoryBtn = styled(NavLink)`    
    display : inline-block;
    padding : 0.8rem 1.2rem;
    border-radius : 5px;
    border : 1px solid #6D6AFE;
    background-color : #fff;
    cursor: pointer;
    font-size : 1.6rem;
    color : #000;
    font-weight : 400;
    user-select :none;
    &.active{
        color : #fff;
        background-color :  #6D6AFE;
    }
`;

const CategoryList = styled.ul`
    display : flex;
    gap : 8px;
`;

 function CategoryBar({categoryList}) {
    
    return(
         <CategoryBarBlock>
            <CategoryList>
                <li>
                    <CategoryBtn 
                        to='/folder'
                        className={({isActive}) => isActive ? 'active' : undefined}
                    >
                        전체
                    </CategoryBtn>
                </li>
                {categoryList ? 
                    categoryList.map(category => (
                        <li key={category.id}>
                            <CategoryBtn
                                to={`${category.id}`}
                                className={({isActive}) => isActive ? 'active' : undefined}
                            >
                                {category.name}
                            </CategoryBtn>
                        </li>
                        )) : null
                }
            </CategoryList>
            <button className="add-folder-btn">폴더 추가 +</button>
         </CategoryBarBlock>
    )
 } 



 export default CategoryBar;