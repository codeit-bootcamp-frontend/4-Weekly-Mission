import styled from "styled-components";

export const ModalContentInput = ({ id }) => {
  const Content = () => {
    if (id === 1) {
      return <div>10238129381028301928301</div>;
    }
    if (id === 2) {
      return (
        <>
          <Input />
          <BlueButton>변경하기</BlueButton>
        </>
      );
    }
    if (id === 3) {
      return <DeleteButton placeholder="sdkfnsdkfn">삭제하기</DeleteButton>;
    }
  };

  return <Content />;
};

const Input = styled.input`
  width: 280px;
  height: 50px;
  padding: 18px, 15px, 18px, 15px;
  border: 1px solid rgb(202, 202, 202);
  border-radius: 10px;
  margin-bottom: 7px;
`;

const DeleteButton = styled.button`
  width: 280px;
  height: 51px;
  padding: 16px, 20px, 16px, 20px;
  border-radius: 8px;
  background: #ff5b56;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
`;
const BlueButton = styled.button`
  width: 280px;
  height: 51px;
  padding: 16px, 20px, 16px, 20px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;
