import "./CardList.css";

export const CardList = ({ children }) => {
  //api에서 파일을 불러오지 못하면 '저장된 링크가 없습니다.' 라는 메시지가 출력된다.
  return children ? (
    <div className="CardList">{children}</div>
  ) : (
    <p>저장된 링크가 없습니다.</p>
  );
};
