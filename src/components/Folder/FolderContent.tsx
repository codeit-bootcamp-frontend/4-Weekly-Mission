import React, { useState, useEffect, FormEvent, ChangeEvent, MouseEvent } from 'react';
import Content from '../Content/Content';
import { API_PATH } from '../../services/api-path';
import FETCH_API from '../../services/fetch-data';
import linkIcon from '../../assets/link.svg';
import * as Styled from './Folder.styled';
import { LinkType, CategoryType, SelectCategoryType } from '../../types/type';

interface FolderContentPropsType {
  handleKebabClick: (id: number) => void;
  selectCardId: number;
  categoryList: CategoryType[];
  setCategoryList: (category: CategoryType[]) => void;
  handleModalAction: (action: string, subTitle?: string, url?: string) => void;
}

function FolderContent({
  handleKebabClick,
  selectCardId,
  categoryList,
  setCategoryList,
  handleModalAction
}: FolderContentPropsType) {
  const [selectCategory, setSelectCategory] = useState<SelectCategoryType>({
    // 현재 선택중인 카테고리
    id: 0,
    name: '전체'
  });
  const [linkList, setLinkList] = useState<LinkType[]>([]); // 유저가 가지고 있는 링크
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  // 유저가 가지고 있는 카테고리 로드(데이터 통신, 첫 렌더링 시에만 실행)
  useEffect(() => {
    const userCategoryLoad = async (): Promise<void> => {
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
  const allLinkLoad = async (): Promise<void> => {
    try {
      const response = await fetch(API_PATH.ALL_LINK);
      if (!response.ok) {
        throw new Error('전체 링크 로드 에러 발생');
      }
      const result = await response.json();
      setLinkList(result.data);
      setSelectCategory({
        id: 0,
        name: '전체'
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    allLinkLoad();
  }, []);

  // 카테고리 안에 있는 링크 로드( [전체] 카테고리 이외의 카테고리 클릭시 실행)
  const handleSelectCategory = async (id: number, name: string): Promise<void> => {
    try {
      const response = await fetch(API_PATH.CATEGORY_LINK + id);
      if (!response.ok) {
        throw new Error('카테고리 링크 로드 에러 발생');
      }
      const result = await response.json();
      setLinkList(result.data);
      setSelectCategory({
        id,
        name
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getClickArea = (e: MouseEvent<HTMLElement>): void => {
    if ((e.target as HTMLElement).className !== 'content__kebab') {
      handleKebabClick(0);
    }
  };

  const handleSearchFromSumbit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!searchInputValue) {
      alert('링크를 입력해 주세요!');
      return;
    }
    handleModalAction('폴더에 추가', searchInputValue);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
    setLinkList
  };

  return (
    <Styled.Folder onClick={(e) => getClickArea(e)}>
      <Styled.Link>
        <Styled.LinkBox>
          <form onSubmit={handleSearchFromSumbit}>
            <Styled.Label htmlFor="link--add">링크 추가</Styled.Label>
            <Styled.LinkInput
              id="link--add"
              onChange={(e) => handleSearchInputChange(e)}
              value={searchInputValue}
              type="text"
              placeholder="      링크를 추가해 보세요"
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
