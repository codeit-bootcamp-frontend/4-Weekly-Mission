import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #edf7ff;
  padding: 2rem 0 6rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  .owner {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    .owner-img {
      height: 6rem;
    }
  }

  .folder-name {
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
  }
`;
