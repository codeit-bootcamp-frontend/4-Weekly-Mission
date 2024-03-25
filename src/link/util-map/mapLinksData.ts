import { Link } from "@/types/link";
import format from "date-fns/format";
import { getElapsedTime } from "sharing/util";

export const mapLinksData = (link: Link) => {
  const { id, createdAt, url, imageSource, title, description } = link;

  return {
    id,
    url,
    imageSource,
    // title이 null,undefined일 수도 있다는 암시 => 옵셔널 프로퍼티 추가
    alt: `${title ?? url}의 대표 이미지`,
    elapsedTime: getElapsedTime(createdAt),
    description,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
  };
};
