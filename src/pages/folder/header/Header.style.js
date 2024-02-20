import styled from 'styled-components';

export const Container = styled.div`
  padding: 6rem 0 9rem;
  background-color: #edf7ff;
  @media all and (min-width: 375px) and (max-width: 1124px) {
    padding: 6rem 3.2rem 9rem;
  }
  .add-link-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 16px 20px;
    border-radius: 15px;
    border: 1px solid var(--primary, #6d6afe);
    background: var(--white, #fff);

    .input-box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      flex-grow: 1;
      & input {
        flex-grow: 1;
        border: none;
        font-size: 1.6rem;
        line-height: 24px;
      }
      & input::placeholder {
        color: var(--gray60, #9fa6b2);
      }
    }
  }
`;
