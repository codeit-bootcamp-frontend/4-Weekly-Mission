import "./Modal.css";
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

function ModalShareSubFolder({ modalData }) {
	console.log(modalData);
	return (
		<>
			<h1 className={style.modalTitle}>
				폴더 공유
				<br />
				<span className={style.modalCaption}>{modalData}</span>
			</h1>
			<div className="modal-box">
				<div className="modal-share-layout">
					<button className="modal-img modal-kakao">
						<img src="Kakao.svg" />
					</button>
					카카오톡
				</div>
				<div className="modal-share-layout">
					<button className="modal-img modal-facebook">
						<img src="Facebook.svg" />
					</button>
					페이스북
				</div>
				<div className="modal-share-layout">
					<button className="modal-img modal-link">
						<img src="link.svg" />
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
	const [targetLink, [dummy, favor, ...folderList]] = [...modalData];

	return (
		<>
			<h1 className={style.modalTitle}>
				폴더에 추가 <br />
				<span className={style.modalCaption}>{targetLink}</span>
			</h1>
			<div className={style.shareButtonLayout}>
				{folderList.map((item) => (
					<button className="modal-sub-folder-btn-list" key={item.name}>
						<h2>{item.name}</h2>
						{`${item.length || 0}개 링크`}
					</button>
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
