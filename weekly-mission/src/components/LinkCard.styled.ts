import styled from "styled-components";

interface OptionProps {
  $visible: boolean;
}
export const LinkCardBlock = styled.div`
  width: 340px;
  height: 334px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s;
  position: relative;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.5);
  }
`;

export const Star = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;
export const Link = styled.a``;
export const StarIcon = styled.img``;
export const Option = styled.div<OptionProps>`
  width: 10rem;
  position: absolute;
  bottom: -60px;
  right: 0px;
  background-color: #fff;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
`;

export const OptionBtn = styled.button`
  padding: 0.7rem 1.2rem;
  width: 100%;
  color: #333236;
  font-size: 1.4rem;

  &:hover {
    background-color: #e7effb;
    color: #6d6afe;
  }
`;

export const CardDescription = styled.p`
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 2.4em;
  margin-bottom: 1rem;
`;

export const CardImgBox = styled.div`
  width: 100%;
  height: 20rem;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1.5rem 2rem;
`;

export const Wrap = styled.div`
  font-size: 1.3rem;
  color: #666;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const CreateDate = styled.span`
  color: #333;
  font-size: 1.4rem;
`;

export const OptionMenuBtn = styled.button`
  z-index: 500;
  padding: 5px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const KebabWrap = styled.div`
  position: relative;
`;

export const KebabIcon = styled.img``;
