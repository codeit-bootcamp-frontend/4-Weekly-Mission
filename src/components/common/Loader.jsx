import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const Loader = styled.div`
  height: 3rem;
  width: 3rem;
  border: 0.1rem solid ${props => props.theme.primary_color};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 1.6rem auto;
  animation: ${rotation} 1s linear infinite;
`;

export default Loader;
