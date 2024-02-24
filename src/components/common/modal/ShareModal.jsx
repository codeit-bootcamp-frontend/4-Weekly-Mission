import React from 'react';
import styled from 'styled-components';
import kakao from 'assets/images/modal/Kakao.png';
import facebook from 'assets/images/modal/Facebook.png';
import copyLink from 'assets/images/modal/copyLink.png';

const ShareModal = ({ title, subTitle }) => {
  return (
    <Container>
      <StyledTitle>
        {title}
        <StyledSubTitle>{subTitle}</StyledSubTitle>
      </StyledTitle>
      <GridContainer>
        <FlexContainer>
          <StyledButton className="kakao">
            <img src={kakao} alt="share by kakao" />
          </StyledButton>
          <StyledButtonName>카카오톡</StyledButtonName>
        </FlexContainer>
        <FlexContainer>
          <StyledButton className="facebook">
            <img src={facebook} alt="share by facebook" />
          </StyledButton>
          <StyledButtonName>페이스북</StyledButtonName>
        </FlexContainer>
        <FlexContainer>
          <StyledButton className="copyLInk">
            <img src={copyLink} alt="share by copy lInk" />
          </StyledButton>
          <StyledButtonName>링크 복사</StyledButtonName>
        </FlexContainer>
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  margin: 1rem;
`;
const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`;
const StyledSubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  text-align: center;
  color: ${({ theme }) => theme.gray60};
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  grid-column-gap: 3.2rem;
  justify-content: center;
  align-items: center;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 3.7rem;
  padding: 1.2rem;
  background-color: ${props => {
    if (props.className === 'kakao') return '#FEE500';
    if (props.className === 'facebook') return '#1877F2';
    if (props.className === 'copyLink') return '#9d9d9d';
  }};
`;
const StyledButtonName = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
`;
export default ShareModal;
