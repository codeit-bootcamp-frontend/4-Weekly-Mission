import kebabImg from "./kebab.svg";

export const KebabMenu = () => {
  const handelClick = (e) => {
    e.preventDefault();

    return (
      <div>
        <div>삭제하기</div>
        <div>폴더에 추가</div>
      </div>
    );
  };

  return (
    <div>
      <img onClick={handelClick} src={kebabImg}></img>
    </div>
  );
};
