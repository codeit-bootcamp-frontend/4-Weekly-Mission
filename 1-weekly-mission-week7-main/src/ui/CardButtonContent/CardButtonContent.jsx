import "./CardButtonContent.css";

export const CardButtonContent = () => {
  const buttonContent = [
    "전체",
    "️즐겨찾기",
    "코딩 팁",
    "채용 사이트",
    "유용한 글",
    "나만의 장소",
  ];

  const handleButtonClick = (index) => {
    let apiURL = "";
    switch (index) {
      case 0:
        console.log("전체 버튼이 클릭되었습니다.");
        apiURL = "users/1/links";
        break;
      case 1:
        console.log("즐겨찾기 버튼이 클릭되었습니다.");
        apiURL = "API 주소2";
        break;
      case 2:
        console.log("코딩팁 버튼이 클릭되었습니다.");
        apiURL = "API 주소3";
        break;
      case 3:
        console.log("채용 사이트 버튼이 클릭되었습니다.");
        apiURL = "API 주소4";
        break;
      case 4:
        console.log("유용한 글 버튼이 클릭되었습니다.");
        apiURL = "API 주소5";
        break;
      case 5:
        console.log("나만의 장소 버튼이 클릭되었습니다.");
        apiURL = "API 주소6";
        break;
      default:
        console.log("알 수 없는 버튼이 클릭되었습니다.");
        break;
    }
  };

  return (
    <div>
      {buttonContent.map((element, index) => (
        <button
          key={index}
          className="CardButtonContent"
          onClick={() => handleButtonClick(index)}
        >
          {element}
        </button>
      ))}
    </div>
  );
};
