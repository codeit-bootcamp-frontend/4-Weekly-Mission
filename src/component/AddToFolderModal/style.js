import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: default;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 360px;
  position: relative;

  .ModalX {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 24px;
    height: 24px;
    background-color: #e7effb;
    color: #9fa6b2;
    border-radius: 100%;
    &:hover {
      cursor: pointer;
    }
  }

  * {
    width: 100%;
    text-align: center;
  }

  p {
    font-size: 20px;
    font-weight: 700;
    &.link {
      font-size: 14px;
      font-weight: 400;
      color: #9fa6b2;
    }
  }
`;

export const Ul = styled.ul`
  padding: 0;
  li {
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    padding: 8px;
    margin: 8px 0;
    text-align: left;
    font-size: 1rem;

    &:hover {
      cursor: pointer;
      background-color: #f0f6ff;
      color: #6d6afe;
    }

    div {
      text-align: left;

      .count {
        font-size: 14px;
        color: #9fa6b2;
      }
    }

    .selected {
      width: 1rem;
    }
  }
`;
