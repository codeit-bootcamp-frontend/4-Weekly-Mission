import styled from "styled-components"
import { Wrapper } from "components/Layout/Wrapper.style"

export const Folder = styled.section`
  background-color: var(--gray5);
  padding: 60px 0 90px 0;
`

export const FolderWrapper = styled(Wrapper)``

export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  height: 69px;
  border: 1px solid var(--primary);
  border-radius: 15px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  .input-layout {
    width: calc(100% - 120px);
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
    }

    input {
      height: 24px;
      margin-left: 12px;
      line-height: 24px;
      background-color: red;
      width: calc(100% - 32px);
      background-color: transparent;

      &::placeholder {
        color: var(--gray2);
      }
    }
  }

  @media (max-width: 769px) {
    height: 53px;
    padding: 0 10px;

    .input-layout {
      img {
        width: 16px;
        height: 16px;
      }

      input {
        margin-left: 8px;
        font-size: 14px;
      }
    }
  }
`
