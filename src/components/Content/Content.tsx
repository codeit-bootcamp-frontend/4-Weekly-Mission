import React, { ChangeEvent, useState, useEffect, SetStateAction, Dispatch, useRef } from 'react';
import CardList from '../Card/CardList';
import Category from '../Category/Category';
import * as Styled from './Content.styled';

interface Link {
  id: number;
  createdAt?: string;
  created_at?: string;
  imageSource?: string;
  image_source?: string;
  title: string;
  description: string;
  url: string;
}

interface LinkType {
  count: number;
}

interface CategoryListType {
  created_at?: string;
  favorite?: boolean;
  id: number;
  link: LinkType;
  name: string;
  user_id?: number;
}

interface CategoryType {
  id: number;
  name: string;
}

interface ContentPropsType {
  categoryList?: CategoryListType[];
  selectCategory?: CategoryType;
  allLinkLoad?: () => Promise<void>;
  handleSelectCategory?: (id: number, name: string) => Promise<void>;
  handleKebabClick?: (id: number) => void;
  selectCardId?: number;
  linkList: Link[];
  option: boolean;
  handleModalAction?: (action: string, subTitle?: string, url?: string) => void;
  setLinkList: Dispatch<SetStateAction<Link[]>>;
}

function Content({
  categoryList,
  selectCategory,
  allLinkLoad,
  handleSelectCategory,
  handleKebabClick,
  selectCardId,
  linkList,
  option,
  handleModalAction,
  setLinkList
}: ContentPropsType) {
  const [searchValue, setSearchValue] = useState<string>('');
  const currentAllLink = useRef<Link[]>([]);
  const categoryProps = {
    categoryList,
    selectCategory,
    allLinkLoad,
    handleSelectCategory,
    handleModalAction
  };

  useEffect(() => {
    if (!searchValue && linkList) {
      // 인풋 값이 없고, 링크가 있을 때 실행
      currentAllLink.current = linkList;
    }
  }, [linkList]);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchChange = (value: string): void => {
    if (!searchValue) {
      setLinkList(currentAllLink.current);
      return;
    }
    const lowerSearchValue = value.toLocaleLowerCase();
    const searchResult = linkList?.filter(
      (list) =>
        list.title?.toLowerCase().includes(lowerSearchValue) ||
        list.description?.toLowerCase().includes(lowerSearchValue)
    );
    setLinkList(searchResult);
  };

  useEffect(() => {
    // searchValue 바뀌면 일정시간 후 함수 호출
    const timer = setTimeout(() => {
      handleSearchChange(searchValue);
    }, 500); // 500ms(0.5초) 딜레이

    // 클린업 함수 => 타이머 클리어
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <Styled.Content>
      <form>
        <Styled.Label htmlFor="content--search">링크 검색</Styled.Label>
        <Styled.SearchInput
          value={searchValue}
          onChange={(e) => handleSearchValue(e)}
          id="content--search"
          type="search"
          placeholder="🔍  링크를 검색해 보세요."
        />
      </form>
      {option && <Category {...categoryProps} />}
      <CardList
        handleKebabClick={handleKebabClick}
        selectCardId={selectCardId}
        linkList={linkList}
        option={option}
        handleModalAction={handleModalAction}
      />
    </Styled.Content>
  );
}

export default Content;
