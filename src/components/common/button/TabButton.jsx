import { useState } from 'react';
import { styled } from 'styled-components';

const Styled = {
  Container: styled.ul`
    min-width: 100%;
    display: flex;
    flex-wrap: wrap; // 모바일에서 자동 줄바꿈 되도록
  `,

  Tab: styled.li`
    padding: 0.8rem 1.2rem;
    margin: 0 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: 0.5rem;
    cursor: pointer;

    transition: all ease-in-out 0.25s;

    &:hover {
      background-color: ${({ theme }) => theme.color.gray2};
    }
    &.selected {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
    }
  `,
};

/**
 * TabButton - 공통 탭 컴포넌트
 * @param {Array<{title: string, func: function }>} tabInfo title, func 정보가 객체로 담긴 배열
 * @param {React.HTMLAttributes} htmlButtonProps 기타 탭 버튼 container props
 */

function TabButton({ tabInfo, ...htmlButtonProps }) {
  const [selectedTab, setSeletedTab] = useState(0);

  return (
    <Styled.Container type="button" {...htmlButtonProps}>
      {tabInfo.map((tab, index) => (
        <Styled.Tab
          key={index}
          value={index}
          onClick={(e) => {
            if (selectedTab === e.target.value) return;
            setSeletedTab(e.target.value);
            tab.func();
          }}
          className={selectedTab === index && 'selected'}
        >
          {tab.title}
        </Styled.Tab>
      ))}
    </Styled.Container>
  );
}

export default TabButton;
