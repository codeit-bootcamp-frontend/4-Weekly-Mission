import SearchInput from "../../components/form/SearchInput";
import SharedContents from "./SharedContents";
import Header from "../../components/common/Header";
import UserTitle from "./UserTitle";
import { useRecoilValueLoadable } from "recoil";
import { userData } from "../../store/store";

function Shared() {
    const {contents} = useRecoilValueLoadable(userData);
    return(
        <>
            <Header fixed={true} userImg="profileImageSource" contents={contents}/>
            <UserTitle/>
            <main>
                <div className='container'>
                    <SearchInput/>
                    <SharedContents/>
                </div>
            </main>
        </>
    )
}
export default Shared;