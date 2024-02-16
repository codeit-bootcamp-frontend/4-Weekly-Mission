// import folders from "folders_mockData.json";

function AddSubFolder() {
	return (
		<button>
			폴더 추가 <img alt="AddFolderButton" />
		</button>
	);
}

// function SubFolders(subFolderData) {
// 	return (
// 		<div>
// 			{subFolderData.map((item) => (
// 				<button>{item.name}</button>
// 			))}
// 		</div>
// 	);
// }

function CurrentSubFolder(currentFolder) {
	return <>{currentFolder[0]}</>;
}

function HandleCurrentSubFolder() {
	return (
		<div>
			<button>
				<img alt="ShareButtonImg" />
				공유
			</button>
			<button>
				<img alt="RenameButtonImg" />
				이름 변경
			</button>
			<button>
				<img alt="DeleteButtonImg" />
				삭제
			</button>
		</div>
	);
}

export default function LinkSubFolder() {
	return (
		<div>
			<div>
				{/* <SubFolders subFolderData={{ name: "가가가가" }} /> */}
				<AddSubFolder />
			</div>
			<div>
				<CurrentSubFolder currentFolder={["testing"]} />
				<HandleCurrentSubFolder />
			</div>
		</div>
	);
}
