import formatTimeDifference from "./formatTimeDifference";
import formatDate from "./formatDate";
import noImage from "../assets/noImage.svg";

const transformData = (item) => {
  const {
    title,
    createdAt,
    created_at,
    url,
    description,
    imageSource,
    image_source,
  } = item;

  const src = (imageSource || image_source) ?? noImage;

  const transformedData = {
    title,
    url,
    description,
    src,
    timeDifference: formatTimeDifference(createdAt || created_at),
    formattedDate: formatDate(createdAt || created_at),
  };

  return transformedData;
};

export default transformData;
