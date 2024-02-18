import styled from "styled-components"
import { NavLink } from "react-router-dom";



const CategoryBarBlock = styled.div`
    width : 100%;
    margin : 0 auto;
    display : flex;
    justify-content : space-between;
   
      
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
    flex-wrap : wrap;
`;

const AddFolderBtn = styled.button`
        outline : none;
        border: none;
        color: #6D6AFE;
        font-size : 1.6rem;
        background-color : transparent;
        cursor: pointer;
        @media (max-width : 1040px){
            display : none;
        }
`;

function CategoryBar({ categoryList, onClick }) {


    return (
        <CategoryBarBlock>
            <CategoryList>
                <li 
                    onClick={() => {
                        onClick('전체');
                    }}
                >
                    <CategoryBtn
                        to='all'
                        className={({ isActive }) => isActive ? 'active' : undefined}
                    >
                        전체
                    </CategoryBtn>
                </li>
                {categoryList ?
                    categoryList.map(category => (
                        <li 
                            key={category.id}
                            onClick={() => {
                                onClick(category.name)
                            }} 
                        >
                            <CategoryBtn
                                to={`${category.id}`}
                                className={({ isActive }) => isActive ? 'active' : undefined}
                                                        
                            >
                                {category.name}
                            </CategoryBtn>
                        </li>
                    )) : null
                }
            </CategoryList>
            <AddFolderBtn>폴더 추가 +</AddFolderBtn>
        </CategoryBarBlock>
    )
}



export default CategoryBar;