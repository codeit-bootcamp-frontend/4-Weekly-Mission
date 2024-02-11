import codeitLogo from '../images/codeit-logo.svg';

async function fetchFolderInfo(folderInfo, setFolderInfo) {
  try {
    const response = await fetch(
      'https://bootcamp-api.codeit.kr/api/sample/folder'
    );
    if (!response.ok) {
      throw new Error('response 전달 실패');
    }
    const data = await response.json();
    setFolderInfo({
      ownerName: data.folder.owner.name,
      folderName: data.folder.name,
      profileImage: codeitLogo,
      // 서버에서 받은 이미지가 안 예뻐서, 로컬의 이미지로 변경
      // profileImage: data.folder.owner.profileImageSource,
    });
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

export default fetchFolderInfo;
