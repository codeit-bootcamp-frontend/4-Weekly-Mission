import { useState } from 'react';
import ModalPortal from '../components/modal/ModalPortal';

const HomePage = () => {
  //어디서든 써야 하니까 이걸 모달 포탈루?
  //만약 뺀다면 버튼 클릭에서 onclick을 통해 필요한 함수명은?
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  //모달을 보여줄지, 말지.
  //모달을 켜고 꺼고 = 토글로
  //이 모달 자체 동작에 대한것만 넘기기
  //명령형 선언형

  return (
    <div className="contents_area">
      <h1>홈페이지입니다.</h1>
      <button onClick={openModal}>클릭</button>
      {isModalOpen && (
        <ModalPortal onClose={closeModal} modalTitle="폴더 이름 변경">
          <input
            className="add_link_input"
            type="text"
            placeholder="링크를 검색해 보세요."
          ></input>
        </ModalPortal>
      )}
    </div>
  );
};

export default HomePage;
