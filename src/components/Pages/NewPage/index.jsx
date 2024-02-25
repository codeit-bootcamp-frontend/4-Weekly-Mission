import React from "react";
import Modal from "../../Modal";

const NewPage = () => {
  return (
    <div>
      <Modal.Toggle>토글이다.</Modal.Toggle>
      <Modal>
        <Modal.Title>타이틀이다</Modal.Title>
        <Modal.Description>설명이다.</Modal.Description>
        <Modal.Body>
          <p>바비다</p>
        </Modal.Body>
        <Modal.Button>닫아라</Modal.Button>
      </Modal>
    </div>
  );
};

export default NewPage;
