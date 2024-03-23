import { useState } from 'react';
import { styled } from 'styled-components';

const Styled = {
  Container: styled.ul`
    display: flex;
    flex-wrap: wrap; // 모바일에서 자동 줄바꿈 되도록
    /* min-width: 70%; */
  `,

  Tab: styled.li`
    padding: 0.8rem 1.2rem;
    margin: 0 0.4rem 1.2rem;
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
 * @param {Object[]} tabInfo 탭 정보 객체들로 이루어진 배열
 * @param {Function} onChange - 탭 변경 시 호출되는 콜백 함수
 * @param {React.HTMLAttributes} htmlButtonProps 기타 탭 버튼 container props
 */

interface TabInfo {
  name: string;
  id: number;
}

interface TabButtonProps {
  tabInfo: TabInfo[];
  onChange: (name: string, id: number) => void;
}

function TabButton({ tabInfo, onChange = () => {}, ...htmlButtonProps }: TabButtonProps) {
  const [selectedTab, setSeletedTab] = useState<number>(0);

  return (
    <Styled.Container as="button" {...htmlButtonProps}>
      {tabInfo.map((tab, index) => (
        <Styled.Tab
          key={index}
          value={index}
          onClick={() => {
            if (selectedTab === index) return;
            setSeletedTab(index);
            onChange(tab.name, tab.id);
          }}
          className={selectedTab === index ? 'selected' : ''}
        >
          {tab.name}
        </Styled.Tab>
      ))}
    </Styled.Container>
  );
}

export default TabButton;
