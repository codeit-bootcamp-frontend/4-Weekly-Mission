import { styled } from 'styled-components';

const Styled = {
  Container: styled.div`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
};

/**
 * IconButton - 공통 원형 아이콘 버튼 컴포넌트
 * @param {string} icon 아이콘 이미지 url
 * @param {React.htmlAttributes} htmlButtonProps 기타 버튼 props
 */

function IconButton({ icon, ...htmlButtonProps }) {
  return (
    <Styled.Container type="button" {...htmlButtonProps}>
      <img src={icon} alt={icon} />
    </Styled.Container>
  );
}

export default IconButton;
