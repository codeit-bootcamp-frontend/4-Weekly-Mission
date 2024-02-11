import FolderSearch from "./FolderSearch";
import FolderContents from "./FolderContents";

function Folder({userData}) {
    return(
        <>
            <FolderSearch/>
            <FolderContents links={userData?.links}/>
        </>
    )
}
export default Folder;