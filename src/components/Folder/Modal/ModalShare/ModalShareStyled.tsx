import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
`;

export const ItemsP = styled.p`
  color: #9fa6b2;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
`;

export const SNSContent = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const SNS = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
`;

export const SNSP = styled.p`
  color: #373740;
  text-align: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const SNSImage = styled.img`
  display: flex;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 3.7rem;
  width: 4.2rem;
  height: 4.2rem;
`;

export const KAKAO = styled(SNSImage)`
  background: #fee500;
`;

export const FACEBOOK = styled(SNSImage)`
  background: #1877f2;
`;

export const Link = styled(SNSImage)`
  background: rgba(157, 157, 157, 0.04);
`;
