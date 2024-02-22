import React from 'react';
import '../../style/AddLinkModal.css';

const AddLinkModal = () => {
  return (
    <div className='ModalContainer'>
      <div className='ContentContainer'>
        <div className='ModalContent'>
          <div className='TitleContent'>
            <h2>폴더에 추가</h2>
            <span>링크 주소</span>
          </div>
          <div className='LinksFolderContent'>
            <div className='LinkFolderContent'>
              <div className='FolderContent'>
                <div>코딩팁</div>
                <span>7개 링크</span>
              </div>
            </div>
            <div className='LinkFolderContent'>
              <div className='FolderContent'>
                <div>채용 사이트</div>
                <span>12개 링크</span>
              </div>
            </div>
            <div className='LinkFolderContent'>
              <div className='FolderContent'>
                <div>유용한 글</div>
                <span>30개 링크</span>
              </div>
            </div>
            <div className='LinkFolderContent'>
              <div className='FolderContent'>
                <div>나만의 장소</div>
                <span>3개 링크</span>
              </div>
            </div>
          </div>
          <button>추가하기</button>
        </div>
        <button className='ModalCloseBtn' />
      </div>
    </div>
  );
};

export default AddLinkModal;
