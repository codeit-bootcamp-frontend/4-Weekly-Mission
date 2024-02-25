import './PopOverButton.css';

const PopOverButton = ({ link }) => {
  return (
    <div className="pop_over_button">
      <div className="pop_over_text">삭제하기</div>
      <div className="pop_over_text">폴더에 추가</div>
    </div>
  );
};

export default PopOverButton;
