import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 330px; */
  width: auto;
  margin-left: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);

  .img {
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  img:hover {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }

.text-box {
     padding: 15px 20px;

     .desc {
       font-size: 16px;
       font-weight: 400;
       line-height: 24px;
     }

     .date {
       font-size: 14.6px;
       font-weight: 400;
     }
   }
`;