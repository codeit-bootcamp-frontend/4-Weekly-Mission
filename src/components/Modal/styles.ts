import { css } from "@emotion/react";

export const background = css`
  background-color: rgb(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const modal = css`
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 15px;
  border: 1px solid var(--Stroke-light, #dee2e6);
  background: var(---Gray-White, #fff);
`;
