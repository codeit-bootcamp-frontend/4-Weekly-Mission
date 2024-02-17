import formatTimeDifference from "../utils/formatTimeDifference";
import formatDate from "../utils/formatDate";
import noImage from "../assets/noImage.svg";

const useTransformData = (item) => {
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

export default useTransformData;
