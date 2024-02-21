import { useState, useEffect } from 'react';
import Content from '../content/Content';
import { API_PATH } from '../../services/api-path';
import FETCH_API from '../../services/fetch-data';
import linkIcon from '../../assets/link.svg';
import * as Styled from './Folder.styled';

function FolderContent({ handleKebabClick, selectCardId, categoryList, setCategoryList, handleModalAction }) {
  const [selectCategory, setSelectCategory] = useState({
    // 현재 선택중인 카테고리
    id: 0,
    name: '전체',
  });
  const [linkList, setLinkList] = useState([]); // 유저가 가지고 있는 링크
  const [searchInputValue, setSearchInputValue] = useState('');

  // 유저가 가지고 있는 카테고리 로드(데이터 통신, 첫 렌더링 시에만 실행)
  useEffect(() => {
    const userCategoryLoad = async () => {
      try {
        const response = await FETCH_API.get(API_PATH.USER_FOLDER);
        if (!response.ok) {
          throw new Error('카테고리 로드 에러 발생');
        }
        const result = await response.json();
        setCategoryList([...categoryList, ...result.data]);
      } catch (error) {
        console.error(error);
      }
    };
    userCategoryLoad();
  }, []);

  // 유저가 가지고 있는 전체 링크 로드(데이터 통신, 첫 렌더링 시에 실행, 전체 카테고리 클릭시 실행)
  const allLinkLoad = async () => {
    try {
      const response = await fetch(API_PATH.ALL_LINK);
      if (!response.ok) {
        throw new Error('전체 링크 로드 에러 발생');
      }
      const result = await response.json();
      setLinkList(result.data);
      setSelectCategory({
        id: 0,
        name: '전체',
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    allLinkLoad();
  }, []);

  // 카테고리 안에 있는 링크 로드( [전체] 카테고리 이외의 카테고리 클릭시 실행)
  const handleSelectCategory = async (id, name) => {
    try {
      const response = await fetch(API_PATH.CATEGORY_LINK + id);
      if (!response.ok) {
        throw new Error('카테고리 링크 로드 에러 발생');
      }
      const result = await response.json();
      setLinkList(result.data);
      setSelectCategory({
        id,
        name,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getClickArea = (e) => {
    if (e.target.className !== 'content__kebab') {
      handleKebabClick(0);
    }
  };

  const handleSearchFromSumbit = (e) => {
    e.preventDefault();
    if (!searchInputValue) {
      alert('링크를 입력해 주세요!');
      return;
    }
    handleModalAction('폴더에 추가', searchInputValue);
  };

  const handleSearchInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  const contentProps = {
    categoryList,
    selectCategory,
    allLinkLoad,
    handleSelectCategory,
    handleKebabClick,
    selectCardId,
    linkList,
    option: true,
    handleModalAction,
  };

  return (
    <Styled.Folder onClick={(e) => getClickArea(e)}>
      <Styled.Link>
        <Styled.LinkBox>
          <form onSubmit={handleSearchFromSumbit}>
            <Styled.Label htmlFor='link--add'>링크 추가</Styled.Label>
            <Styled.LinkInput
              id='link--add'
              onChange={(e) => handleSearchInputChange(e)}
              value={searchInputValue}
              type='text'
              placeholder='      링크를 추가해 보세요'
              $icon={linkIcon}
            />
            <Styled.LinkAddButton>추가하기</Styled.LinkAddButton>
          </form>
        </Styled.LinkBox>
      </Styled.Link>
      <Content {...contentProps} />
    </Styled.Folder>
  );
}

export default FolderContent;
