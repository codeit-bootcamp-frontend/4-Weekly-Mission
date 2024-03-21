import styled from "styled-components"

export const AddFolder = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--primary);
  font-size: 16px;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }

  path {
    fill: var(--primary);
  }

  @media (max-width: 900px) {
    width: 127px;
    height: 35px;
    justify-content: center;
    background-color: var(--primary);
    color: #fff;
    border-radius: 50px;
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10;

    path {
      fill: #fff;
    }
  }
`
