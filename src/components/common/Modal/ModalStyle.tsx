import styled from "styled-components";

export const Background = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  ${({ theme }) => theme.displays.columnCenter};

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

export const Container = styled.div`
  position: relative;

  ${({ theme }) => theme.displays.columnCenter};

  width: 360px;
  padding: 32px 40px;
  gap: 8px;

  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.SmallTitle};
  ${({ theme }) => theme.bolds.titleBold};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.displays.rowCenter};
  width: 280px;
  padding: 18px 15px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray60};
  padding-bottom: 24px;
  text-align: center;
  ${({ theme }) => theme.fonts.regularSamll};
  ${({ theme }) => theme.bolds.normal};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

export const IconBox = styled.a`
  ${({ theme }) => theme.displays.columnCenter};
  gap: 10px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 42px;
  height: 42px;
`;

export const IconText = styled.h3`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: Inter;
  ${({ theme }) => theme.fonts.small};
  ${({ theme }) => theme.bolds.normal};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 4px;
  padding-bottom: 24px;
`;

export const ListBox = styled.li`
  ${({ theme }) => theme.displays.spaceBetween};
  width: 100%;
  padding: 8px;
  cursor: pointer;

  border-radius: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const ListText = styled.div`
  display: flex;
  gap: 8px;

  ${({ theme }) => theme.fonts.regularSmall};
  ${({ theme }) => theme.bolds.normal};
`;

export const FolderName = styled.h3`
  color: ${({ theme }) => theme.colors.gray100};
`;

export const FolderCount = styled.p`
  color: ${({ theme }) => theme.colors.gray60};
`;

export const CheckImage = styled.img`
  display: none;
  width: 14px;
  height: 14px;

  ${ListBox}:hover & {
    display: block;
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 5;

  width: 24px;
  height: 24px;

  cursor: pointer;
`;
