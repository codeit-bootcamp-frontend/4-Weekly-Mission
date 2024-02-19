import styled from 'styled-components';
import Button from '../../common/Button/Button';

export const SortButtonContainer = styled.div`
  width: 80%;
  margin: 1.5rem auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1199px) {
    display: block;
  }
`;

export const StyledButton = styled(Button)`
  margin-right: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: ${props => (props.isActive ? '2px solid #6d6afe' : '1px solid #ccc')};
  border-radius: 5px;
  background-color: ${props => (props.isActive ? '#6d6afe' : 'transparent')};
  color: ${props => (props.isActive ? '#ffffff' : '#333')};
  cursor: pointer;
  line-height: 20px;
  &:hover {
    background-color: #6d6afe;
    color: #ffffff;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const FolderAddButton = styled.div`
  display: flex;
  align-items: center;
  color: #6d6afe;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.01875rem;

  @media (max-width: 1199px) {
    margin-top: 1.5rem;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const SelectedFolderName = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const PlusStyled = styled.span`
  font-size: 1rem;
`;

export const SelectedFolderContainer = styled.div`
  width: 80%;
  margin: 1.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;
