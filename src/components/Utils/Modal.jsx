import { useState } from "react";
import "./Modal.css";
import style from "./modal.module.css";
import styled from "styled-components";

const Button = styled.button`
	background-color: ${({ state }) =>
		state === "true" ? `var(--LBrary-Background)` : `var(--LBrary-white)`};
`;

function ModalSubFolderNameChange() {
	return (
		<>
			<h1 className={style.modalTitle}>폴더 이름 변경</h1>
			<form action="submit">
				<input
					className={style.modalInput}
					placeholder="내용 입력"
					type="text"
				/>
				<button className={style.modalButton}>변경하기</button>
			</form>
		</>
	);
}

function ModalAddSubFolder() {
	return (
		<>
			<h1 className={style.modalTitle}>폴더 추가</h1>
			<form action="submit">
				<input
					className={style.modalInput}
					placeholder="내용 입력"
					type="text"
				/>
				<button className={style.modalButton}>변경하기</button>
			</form>
		</>
	);
}

function ModalShareSubFolder({ modalData }) {
	const handleCopyToClipboard = () => {
		try {
			navigator.clipboard.writeText(
				`${window.location.hostname}/shared/${modalData[1]}`
			);
			alert("클립보드에 복사되었습니다.");
		} catch (error) {
			alert("클립보드 복사에 실패하였습니다.");
		}
	};

	return (
		<>
			<h1 className={style.modalTitle}>
				폴더 공유
				<br />
				<span className={style.modalCaption}>{modalData[0]}</span>
			</h1>
			<div className="modal-box">
				<div className="modal-share-layout">
					<button
						onClick={() => handleCopyToClipboard()}
						className="modal-img modal-kakao"
					>
						<img src="Kakao.svg" alt={"linkToKakao"} />
					</button>
					카카오톡
				</div>
				<div className="modal-share-layout">
					<button
						onClick={() => handleCopyToClipboard()}
						className="modal-img modal-facebook"
					>
						<img src="Facebook.svg" alt={"linkToFacebook"} />
					</button>
					페이스북
				</div>
				<div className="modal-share-layout">
					<button
						onClick={() => handleCopyToClipboard()}
						className="modal-img modal-link"
					>
						<img src="link.svg" alt={"linkCopy"} />
					</button>
					링크 복사
				</div>
			</div>
		</>
	);
}

function ModalRemoveSubFolder({ modalData }) {
	return (
		<>
			<h1 className={style.modalTitle}>
				폴더 삭제 <br />
				<span className={style.modalCaption}>{modalData}</span>
			</h1>
			<button className={style.modalButton_errored}>삭제하기</button>
		</>
	);
}

function ModalRemoveLink({ modalData }) {
	return (
		<>
			<h1 className={style.modalTitle}>
				링크 삭제 <br />
				<span className={style.modalCaption}>{modalData}</span>
			</h1>
			<button className={style.modalButton_errored}>삭제하기</button>
		</>
	);
}

function ModalAddLinkToFolder({ modalData }) {
	const [targetLink, [favor, ...folderList]] = [...modalData];
	const [SelectedFolder, setSelectedFolder] = useState("");

	const handleSelectFolder = (key) => {
		setSelectedFolder(key);
	};

	return (
		<>
			<h1 className={style.modalTitle}>
				폴더에 추가 <br />
				<span className={style.modalCaption}>{targetLink}</span>
			</h1>
			<div className={style.shareButtonLayout}>
				{folderList.map((item) => (
					<Button
						onClick={() => handleSelectFolder(item.name)}
						state={String(item.name === SelectedFolder)}
						className="modal-sub-folder-btn-list"
						key={item.name}
					>
						<h2>
							{item.name}
							<span>{`${item.length || 0}개 링크`}</span>
						</h2>
						{item.name === SelectedFolder && (
							<img src="check.svg" alt="CheckedFolder" />
						)}
					</Button>
				))}
			</div>
			<button className={style.modalButton}>추가하기</button>
		</>
	);
}

const Modal = ({
	modalType = "UNKNOWN_TYPE",
	modalFunc = false,
	modalData = false,
	isOpened,
	isOpenedToggle,
}) => {
	const renderModal = () => {
		switch (modalType) {
			case "nameChange":
				return <ModalSubFolderNameChange />;

			case "addSubFolder":
				return <ModalAddSubFolder />;

			case "shareFolder":
				return <ModalShareSubFolder modalData={modalData} />;

			case "removeFolder":
				return <ModalRemoveSubFolder modalData={modalData} />;

			case "removeLink":
				return <ModalRemoveLink modalData={modalData} />;

			case "addLinkToFolder":
				return <ModalAddLinkToFolder modalData={modalData} />;

			default:
				throw new Error("검증되지 않은 Modal");
		}
	};

	if (isOpened)
		return (
			<div className={style.modalBackground}>
				<div className={style.container}>
					<button
						className={style.closeButton}
						type="button"
						onClick={isOpenedToggle}
					>
						<img src="modalClose.png" alt="closeButton" />
					</button>

					{renderModal(modalType)}
				</div>
				;
			</div>
		);
};

export default Modal;
