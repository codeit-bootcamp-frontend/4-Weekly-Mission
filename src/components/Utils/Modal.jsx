import { useState } from "react";
import style from "./modal.module.css";

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

function ModalShareSubFolder() {
	return (
		<>
			<h1 className={style.modalTitle}>
				폴더 공유
				<br />
				<span className={style.modalCaption}>asdf</span>
			</h1>
		</>
	);
}

function ModalRemoveSubFolder() {
	return (
		<>
			<h1 className={style.modalTitle}>
				폴더 삭제 <br />
				<span className={style.modalCaption}>asdf</span>
			</h1>
			<button className={style.modalButton}>변경하기</button>
		</>
	);
}

function ModalRemoveLink() {
	return (
		<>
			<h1 className={style.modalTitle}>
				링크 삭제 <br />
				<span className={style.modalCaption}>asdf</span>
			</h1>
			<button className={style.modalButton}>변경하기</button>
		</>
	);
}

function ModalAddLinkToFolder() {
	return (
		<>
			<h1 className={style.modalTitle}>
				폴더에 추가 <br />
				<span className={style.modalCaption}>asdf</span>
			</h1>
			<button className={style.modalButton}>변경하기</button>
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
				return <ModalShareSubFolder />;

			case "removeFolder":
				return <ModalRemoveSubFolder />;

			case "removeLink":
				return <ModalRemoveLink />;

			case "addLinkToFolder":
				return <ModalAddLinkToFolder />;

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

	//   if (isOpen) {
	//     return (
	//       <>
	//         <Container>
	//           <h1>{modalType}</h1>
	//           {modalCaption && <p>{modalCaption}</p>}
	//           <button type="button">x</button>
	//           {/* {subFolderList.map((item) => (
	//               <button>코딩팁 7개 링크</button>
	//             ))} */}
	//           (
	//           <form>
	//             {/* {isInputNeed && (
	//                 <input placeholder="내용 입력" onInput={input}></input>
	//               )} */}
	//             {isShareModal ? (
	//               <>
	//                 <button>kakaoTalk</button>
	//                 <button>facebook</button>
	//                 <button>linkshare</button>
	//               </>
	//             ) : (
	//               <button onSubmit={setInput}>{modalBtn}</button>
	//             )}
	//           </form>
	//           )
	//         </Container>
	//       </>
	//     );
	//   }
};

export default Modal;
