import styled from "styled-components";

export const Form = styled.form`
  ${({ theme }) => theme.displays.columnCenter};
  margin: 238px auto;
  width: 400px;
  gap: 30px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.regularSmall};
`;

export const Logo = styled.img`
  width: 210.583px;
  height: 38px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TitleText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.regular};
`;

export const TitleLink = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.regularSmallBold};
  text-decoration: underline;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts.regularSmall};
`;
export const BoxIcon = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const Icon = styled.img`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
`;

export const ContainerSocial = styled.div`
  ${({ theme }) => theme.displays.spaceBetween};
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  background: ${({ theme }) => theme.colors.gray10};
`;
