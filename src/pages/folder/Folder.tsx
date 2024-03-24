import Header from "../../components/common/Header";
import AddLink from "./AddLink";
import SearchInput from "../../components/form/SearchInput";
import FolderButton from "./FolderButton";
import FolderTitle from "./folderTitle";
import FolderContents from "./FolderContents";
import Modal from "../../components/modal/modal";
import { useState } from "react";
import { ModalNames } from "./type";

const ModalName: ModalNames = {
  add: {
    name: "폴더 추가",
    buttonColor: "blue",
    buttonName: "추가하기",
  },
  folderAdd: {
    name: "폴더에 추가",
    buttonColor: "blue",
    buttonName: "추가하기",
  },
  share: {
    name: "폴더 공유",
    buttonColor: "",
    buttonName: "",
  },
  change: {
    name: "폴더 이름 변경",
    buttonColor: "blue",
    buttonName: "변경하기",
  },
  delete: {
    name: "폴더 삭제",
    buttonColor: "red",
    buttonName: "삭제하기",
  },
  linkDelete: {
    name: "링크 삭제",
    buttonColor: "red",
    buttonName: "삭제하기",
  },
};

function Folder() {
  const [name, setName] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [buttonColor, setButtonColor] = useState<string>("");
  const [buttonName, setButtonName] = useState<string>("");

  return (
    <>
      {openModal ? (
        <Modal
          name={name}
          setOpenModal={setOpenModal}
          buttonColor={buttonColor}
          buttonName={buttonName}
        />
      ) : null}
      <Header fixed={false} />
      <AddLink
        setName={setName}
        setOpenModal={setOpenModal}
        setButtonColor={setButtonColor}
        setButtonName={setButtonName}
        modalName={ModalName}
      />
      <main>
        <div className="container">
          <SearchInput />
          <FolderButton
            setName={setName}
            setOpenModal={setOpenModal}
            setButtonColor={setButtonColor}
            setButtonName={setButtonName}
            modalName={ModalName}
          />
          <FolderTitle
            setName={setName}
            setOpenModal={setOpenModal}
            setButtonColor={setButtonColor}
            setButtonName={setButtonName}
            modalName={ModalName}
          />
          <FolderContents
            setName={setName}
            setOpenModal={setOpenModal}
            setButtonColor={setButtonColor}
            setButtonName={setButtonName}
            modalName={ModalName}
          />
        </div>
      </main>
    </>
  );
}

export default Folder;
