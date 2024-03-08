import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.white};
`;

export const Section = styled.section`
  ${({ theme }) => theme.displays.flexCenterRow}
  gap: 157px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 291px;
  gap: 10px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.title}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray100};

  font-family: Abel;
  ${({ theme }) => theme.fonts.regular};
`;

export const Image = styled.img`
  width: 550px;
  height: 450px;
  border-radius: 15px;
`;
