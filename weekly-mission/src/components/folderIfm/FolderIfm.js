import './FolderIfm.css'




function FolderIfm({ folderIfm }) {
    const { name, owner } = folderIfm;


    return (
        <div className="FolderIfm-card">
            <div className='FolderIfm-owner'>
                <div className='owner-img'>
                    <img src={owner.profileImageSource} alt='폴더소유자 프로필 이미지' />
                </div>
                <span className='owner-name'>
                    @{owner.name}
                </span>
            </div>
            <div className='FolderIfm-name'>
                <strong className='folder-name'>
                    {name}
                </strong>
            </div>
        </div>
    )
}

export default FolderIfm;