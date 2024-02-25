import { css } from "@emotion/react";

const styles = {
  form: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  image: css`
    position: relative;
    top: 16px;
    left: 32px;
    width: 16px;
    height: 16px;
  `,
  input: css`
    display: inline-block;
    border: none;
    outline: none;
    height: 54px;
    width: min(100% - 64px, 1060px);
    background: var(--Grey-Light);
    border-radius: 12px;
    padding: 16px 44px;
    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  `,
};

export default styles;
