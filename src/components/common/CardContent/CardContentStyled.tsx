import styled from "styled-components";

export const CardContent = styled.div`
  position: relative;
  height: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--light-blue);
  }
`;

export const ElapsedTime = styled.span`
  font-size: 1.3rem;
  color: var(--text-content-gray);
`;

export const Description = styled.p`
  height: 4.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.6rem;
  line-height: 150%;
`;

export const CreatedAt = styled.span`
  font-size: 1.4rem;
  color: var(--text-content-black);
`;

export const Kebab = styled.img`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

export const Popover = styled.div`
  position: absolute;
  top: 3rem;
  left: 29.9rem;
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 10;
`;

export const PopoverButton = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: #333236;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #ffffff;

  & hover {
    background-color: var(--gray10);
    color: var(--primary);
  }
`;

export const Button = styled.button``;
