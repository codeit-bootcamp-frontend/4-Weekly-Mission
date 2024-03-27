import { css } from "@emotion/react";

const styles = {
  linkCss: css`
    text-decoration: none;
  `,
  divCss: css`
    width: 340px;
    height: 336px;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);

  `,
  imgWrapperCss: css`
    width: 100%;
    height: 200px;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  logoCss: css`
    position: absolute;
    height: 24px;
    width: auto;
    opacity: 0.2;
  `,
  imgCss: css`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px 16px 0 0;
    transition: width 0.4s ease, height 0.4s ease;
    object-fit: cover;

    &:hover {
      width: 130%;
      height: 130%;
    }
  `,

  pWrapperCss: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 20px;
    height: 136px;
    background: #ffffff;

    &:hover {
      background: var(--Linkbrary-bg);
    }
  `,
  timeCss: css`
    font-weight: 400px;
    font-size: 12px;
    color: #666666;
  `,
  commentCss: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    overflow: hidden;

    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
  commentWrapperCss: css`
    height: 48px;
    width: 100%;
    overflow: hidden;
  `,
  dateCss: css`
    font-weight: 400;
    font-size: 12px;
    color: #333333;
  `,

  starCss: css`
    position: relative;
    top: -320px;
    left: 296px;
  `,
  kebabCss: css`
    position: relative;
    top: -136px;
    left: 272px;
  `,
};

export default styles;
