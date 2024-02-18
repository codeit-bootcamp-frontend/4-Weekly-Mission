export default function FolderProfile({ ownerProfile, loadingError }) {
  return (
    <div>
      <div>
        <img
          src={ownerProfile?.folder?.owner?.profileImageSource}
          alt="폴더 소유자의 프로필 사진"
        />
        <p>{ownerProfile?.folder?.owner?.name}</p>
      </div>
      <p>{ownerProfile?.folder?.name}</p>
      {loadingError && <p>{loadingError.message}</p>}
    </div>
  );
}
