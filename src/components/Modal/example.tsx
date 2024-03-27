//모달 사용 예시입니다.
import Modal from './index'
import ModalPortal from './ModalPortal/index'
import useModal from '../../hooks/useModal'

const ExampleModal = () => {
  const { isOpen, handleClick } = useModal()
  const ButtonOnClick = () => {
    console.log('ts를 위한 예비 함수')
  }
  return (
    <div id="modal">
      <button onClick={handleClick}>열기</button>
      <ModalPortal>
        <Modal isOpen={isOpen}>
          <Modal.CloseButton handleClick={handleClick}>x</Modal.CloseButton>
          <Modal.Header
            Title={<Modal.Title>제목</Modal.Title>}
            Description={<Modal.Description>설명</Modal.Description>}
          />
          <Modal.Body>
            [<div />, <div />]
          </Modal.Body>
          <Modal.Button handleClick={ButtonOnClick}>추가하기</Modal.Button>
        </Modal>
      </ModalPortal>
    </div>
  )
}

export default ExampleModal
