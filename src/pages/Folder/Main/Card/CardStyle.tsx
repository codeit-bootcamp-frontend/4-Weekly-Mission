import styled from "styled-components";

export const Container = styled.a`
  position: relative;
  width: 21.25rem;

  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
`;

export const Image = styled.img`
  width: 340px;
  height: 200px;

  transition: transform 1.5s ease;

  ${Container}:hover & {
    transform: scale(1.3);
  }
`;

export const ImageBox = styled.div`
  position: relative;
  height: 12.5rem;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.25rem;
  padding: 0.94rem 1.25rem;
  gap: 0.62rem;
  border-radius: 0 0 15px 15px;
  background: ${({ theme }) => theme.colors.white};

  ${Container}:hover & {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Time = styled.div`
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.small};
`;

export const Content = styled.p`
  height: 3.1rem;
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

export const StarButton = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 34px;
  height: 34px;
`;

export const Kebab = styled.img`
  width: 21px;
  height: 17px;
  cursor: pointer;

  z-index: 10;
`;

export const KebabBox = styled.div`
  ${({ theme }) => theme.displays.spaceBetween};
`;
