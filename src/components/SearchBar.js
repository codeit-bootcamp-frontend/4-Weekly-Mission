import React from 'react';
import searchIcon from '../images/search.svg';
import link from '../images/link.svg';
import styled from 'styled-components';

const Icon = styled.img`
  position: absolute;
`;

const Input = styled.input`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

const AddButton = styled.button`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 8rem;
  background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 1rem 1.6rem;
  height: 3.7rem;
`;

const AddLink = styled.div`
  display: flex;
  position: relative;
  padding: 6rem 32rem 9rem 32rem;

  ${Icon} {
    top: 38.3%;
    left: 23.5%;
    width: 2rem;
    height: 2rem;

    @media (max-width: 1123px) {
      left: 26.6%;
    }

    @media (max-width: 767px) {
      top: 39%;
      left: 35.4%;
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  ${Input} {
    width: 80rem;
    border-radius: 1.5rem;
    padding: 1.6rem 2rem 1.6rem 5.2rem;
    border: 1px solid var(--primary);
    color: var(--gray60);
    background: var(--white);
    height: 6.9rem;

    @media (max-width: 1123px) {
      width: 70.4rem;
      margin: 0 3.2rem;
    }

    @media (max-width: 767px) {
      width: 32.5rem;
      padding: 0.8rem 1rem;
      padding-left: 3.4rem;
      height: 5.3rem;
    }
  }

  ${AddButton} {
    top: 35%;
    left: 71%;

    @media (max-width: 1123px) {
      left: 68%;
    }

    @media (max-width: 767px) {
      left: 57%;
      top: 33.4%;
    }
  }
`;

const SearchLink = styled.div`
  display: flex;
  position: relative;
  margin: 4rem 0;

  @media (max-width: 1123px) {
    width: 70.4rem;
    margin: 4rem 3.2rem;
  }

  @media (max-width: 767px) {
    margin-top: 2rem;
    width: 32.5rem;
  }

  ${Icon} {
    top: 35%;
    left: 1.6rem;
  }

  ${Input} {
    width: 106rem;
    border-radius: 1rem;
    color: #666;
    background-color: #f5f5f5;
    border: none;
    padding: 1.5rem 1.6rem;
    padding-left: 4.2rem;

    @media (max-width: 767px) {
      padding: 1.3rem 1.6rem;
      padding-left: 3.8rem;
    }
  }
`;

const SearchBar = ({ format }) => {
  return format === 'searchLink' ? (
    <SearchLink>
      <Input type="text" placeholder="링크를 검색해 보세요." />
      <Icon src={searchIcon} alt="search icon" />
    </SearchLink>
  ) : format === 'addLink' ? (
    <AddLink>
      <Icon src={link} alt="add icon" />
      <Input type="text" placeholder="링크를 추가해 보세요." />
      <AddButton>추가하기</AddButton>
    </AddLink>
  ) : null;
};

export default SearchBar;
