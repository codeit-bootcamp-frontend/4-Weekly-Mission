import { styled } from 'styled-components';

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
  `,

  Label: styled.span`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray4};
  `,
};

function IconLabelButton({ icon, label, onClick }) {
  return (
    <Styled.Container type="button" onClick={() => console.log('클릭이벤트')}>
      <img src={icon} alt={icon} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
}

export default IconLabelButton;
