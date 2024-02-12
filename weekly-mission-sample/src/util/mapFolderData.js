import format from "date-fns/format";
import { getElapsedTime } from "./getElapsedTime";

export const mapFolderData = (folder) => {
  //UseGetFolder함수에서 값을 전달할 때, null,이나 undefined면 undefined가 전달되는데, 이 때문에 !folder가 true가 되어서 빈 객체가 반환된다.
  if (!folder) return [];
  //data.folder의 값을 구조 분해 할당으로 변수에 선언하고 있다.
  const { name, owner, links } = folder;
  //새로운 객체를 반환하는 mapLinks 함수를 선언하고 있다.
  const mapLinks = (link) => {
    //link를 매개변수로 받아, 그 안에 있는 아이디, 생성 날짜, URL, 이미지 소스, 제목, 설명을 추출하고 있다.
    const { id, createdAt, url, imageSource, title, description } = link;
    return {
      id,
      url,
      imageSource,
      alt: `${title ?? url}의 대표 이미지`,
      //생성 후 경과 시간의 타임스탬프를 구하고 있다.
      elapsedTime: getElapsedTime(createdAt),
      description,
      //타임스탬프를 연도.월.일의 형태로 바꾸고 있다.
      createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
    };
  };
  //리턴값으로 객체를 지정하고 있다.
  return {
    profileImage: owner?.profileImageSource,
    ownerName: owner?.name,
    folderName: name,
    //links 배열의 각 요소에 mapLinks 함수를 실행한 값을 반환한다. links가 undefined면 빈 배열을 반환한다.
    links: links?.map(mapLinks) ?? [],
  };
};
