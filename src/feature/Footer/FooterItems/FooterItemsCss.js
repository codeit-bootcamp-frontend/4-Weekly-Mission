import styled from 'styled-components';

export const FooterItemsCss = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template:
    "footer-links sns"
    ". ." 1fr
    "copyright .";
  width: 100%;
  padding: 3.2rem;
  color: var(--text-gray);
  font-size: 1.6rem;
  font-family: Arial;

  @media (min-width: 768px) {
    grid-template: "copyright footer-links sns";
    height: fit-content;
    max-width: 192rem;
    padding: 3.2rem 10.4rem 0;
  }
`;