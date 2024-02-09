import { styled } from 'styled-components';

const Styled = {
  Date: styled.span`
    font-size: 1.4rem;
    color: #333333;
  `,
};

function DateFormat({ createdAt }) {
  const dateObject = new Date(createdAt);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  return <Styled.Date>{`${year}. ${month}. ${day}`}</Styled.Date>;
}

export default DateFormat;
