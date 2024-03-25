import { HeaderContainer } from 'styles/HeaderContainer';
import AddLink from './AddLink';
import styled from 'styled-components';

const FixedAddLink: React.FC = () => {
  return (
    <>
      <FixedHeader>
        <AddLink isBottom={true} />
      </FixedHeader>
    </>
  );
};

const FixedHeader = styled(HeaderContainer)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 5;
  background-color: ${({ theme }) => theme.linkbrary_bg};
`;

export default FixedAddLink;
