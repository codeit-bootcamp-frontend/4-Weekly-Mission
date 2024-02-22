import Header from "../../components/common/Header";
import { useRecoilValueLoadable } from "recoil";
import { folderUser } from "../../store/store";
import AddLink from "./AddLink";
import SearchInput from "../../components/form/SearchInput";
import FolderButton from "./FolderButton";
import FolderTitle from "./folderTitle";
import FolderContents from "./FolderContents";

function Folder() {
    const {contents} = useRecoilValueLoadable(folderUser);
    const data = contents?.data?.[0];
    
    return(
        <>
            <Header contents={data} userImg='image_source'/>
            <AddLink/>
            <main>
                <div className='container'>
                    <SearchInput/>
                    <FolderButton/>
                    <FolderTitle/>
                    <FolderContents/>
                </div>
            </main>
        </>
    )
}

export default Folder;