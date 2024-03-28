import styled, { css } from "styled-components";

const socialIconSize = css`
  width: 20px;
  height: 20px;
`;

const actionIconSize = css`
  width: 18px;
  height: 18px;
`;

const shareIconSize = css`
  width: 42px;
  height: 42px;
`;

export const Facebook = styled.div`
  background: url("/assets/icons/facebook.svg") no-repeat;
  ${socialIconSize}
`;

export const Twitter = styled.div`
  background: url("/assets/icons/twitter.svg") no-repeat;
  ${socialIconSize}
`;

export const Youtube = styled.div`
  background: url("/assets/icons/youtube.svg") no-repeat;
  ${socialIconSize}
`;

export const Instagram = styled.div`
  background: url("/assets/icons/instagram.svg") no-repeat;
  ${socialIconSize}
`;

export const Close = styled.div`
  background: url("/assets/icons/close.svg") no-repeat;
  width: 24px;
  height: 24px;
`;

export const Share = styled.div`
  background: url("/assets/icons/share.svg") no-repeat;
  ${actionIconSize}
`;

export const Delete = styled.div`
  background: url("/assets/icons/delete.svg") no-repeat;
  ${actionIconSize}
`;

export const Edit = styled.div`
  background: url("/assets/icons/pen.svg") no-repeat;
  ${actionIconSize}
`;

export const Star = styled.div`
  background: url("/assets/icons/star.svg") no-repeat;
  width: 34px;
  height: 34px;
`;

export const Kebab = styled.div`
  background: url("/assets/icons/kebab.svg") no-repeat;
  width: 21px;
`;

export const ShareKakao = styled.div`
  background: url("/assets/icons/kakao_share.svg") no-repeat;
  ${shareIconSize}
`;

export const ShareFacebook = styled.div`
  background: url("/assets/icons/facebook_share.svg") no-repeat;
  ${shareIconSize}
`;

export const ShareLink = styled.div`
  background: url("/assets/icons/link_share.svg") no-repeat;
  ${shareIconSize}
`;
