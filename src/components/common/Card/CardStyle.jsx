import styled from "styled-components";

export const Container = styled.div`
  width: 340px;
  height: 334px;
  flex-shrink: 0;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
`;

export const Image = styled.img`
  width: 340px;
  height: 200px;
  transition: transform 1.5s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

export const ImageBox = styled.div`
  height: 200px;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px 20px;
  gap: 10px;
  border-radius: 0px 0px 15px 15px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Time = styled.div`
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.small};
`;

export const Content = styled.p`
  height: 49px;
  align-self: stretch;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};

  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ theme }) => theme.fonts.regular};
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.regularSmall};
`;
