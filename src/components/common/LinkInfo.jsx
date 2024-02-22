import styled from 'styled-components';
import { format, formatDistanceToNowStrict } from 'date-fns';
import kebab from '../../assets/kebab.svg';

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem;
`;

const TimeInfoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ElapsedTime = styled.p`
  line-height: 1.7rem;
  font-size: 1.3rem;
  font-weight: 400;
  color: #666;
`;

const ButtonKebab = styled.button`
  width: 2.1rem;
  height: 1.7rem;
  background: url(${kebab}) no-repeat center/cover;
`;

const Desc = styled.p`
  display: -webkit-box;
  height: 4.9rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Date = styled.p`
  line-height: 1.9rem;
  font-size: 14px;
  font-weight: 400;
  color: #333;
`;

const LinkInfo = ({ createdAt, desc }) => {
  const elapsedTime = formatDistanceToNowStrict(createdAt);
  const date = format(createdAt, 'yyyy. M. d');

  return (
    <InfoGroup>
      <TimeInfoGroup>
        <ElapsedTime>{elapsedTime} ago</ElapsedTime>
        <ButtonKebab />
      </TimeInfoGroup>
      <Desc>{desc}</Desc>
      <Date>{date}</Date>
    </InfoGroup>
  );
};

export default LinkInfo;
