import styled from 'styled-components';

function OptionButton({ id, svg, text, handleModalOpen }) {
  return (
    <Button onClick={handleModalOpen}>
      <img src={svg} alt={text} />
      <Span>{text}</Span>
    </Button>
  );
}
const Span = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);

  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: none;
  background: white;
  cursor: pointer;
`;
export default OptionButton;
