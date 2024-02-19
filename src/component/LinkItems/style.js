import styled from "styled-components";

export const LinkImage = styled.div`
  background-image: url("${({ src }) => src}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 200px;
  border-radius: 1rem 1rem 0 0;
  transition: background-size 0.3s ease-in-out;
  margin-bottom: 1rem;

  &:hover {
    background-size: 130%;
  }
`;
