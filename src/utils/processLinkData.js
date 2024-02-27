import { format } from "date-fns";
import processTimeData from "./processTimeData";

//시간 형식 바꿔주기 위해!!
const processLinkData = (link) => {
  const { id, createdAt, url, imageSource, description } = link;
  return {
    id,
    url,
    imageSource,
    alt: "대표 이미지",
    passedTime: processTimeData(createdAt),
    description,
    createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
  };
};

export default processLinkData;
