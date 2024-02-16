import styled from "styled-components";
import FooterBlock from "../components/Footer";
import HeaderBlock from "../components/Header";
import LinkAddInput from "../components/LinkAddInput";
import LinkCard from "../components/LinkCard";
import Loading from "../components/Loading";
import OwnerInformation from "../components/OwnerInformation";
import SearchInput from "../components/SearchInput";
import './Folder.css'



const NotLink = styled.div`
    font-size : 1.6rem;
    text-align :center;
    font-weight : 400;
    flex: 1;
`;


function Folder() {
    return (
        <>
            <HeaderBlock />
            <main id="main">
                <section className="section owner-information">
                    <LinkAddInput />
                </section>
                <section className="section linkcards">
                    <div className="container">
                        <ul className="linkcard-list">
                            <NotLink>저장된 링크가 없습니다.</NotLink>
                        </ul>
                    </div>
                </section>
            </main>
            <FooterBlock />
        </>
    )
}

export default Folder;