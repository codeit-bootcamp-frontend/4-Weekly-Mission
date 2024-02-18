import DEFAULT_IMAGE from "../../assets/image/card-default.png";

export const CardImage = ({ src, alt }) => {
  return <img src={src ?? DEFAULT_IMAGE} alt={alt} className="cardImage" />;
};
