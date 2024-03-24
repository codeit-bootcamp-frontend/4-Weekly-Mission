import { useEffect, useState } from "react";
import SearchInput from "components/SearchInput";
import { ownerDataApi } from "api";
import Loading from "components/Loading";
import OwnerInformation from "./component/OwnerInformation";
import LinkCard from "components/LinkCard";
import Footer from "components/Footer";
import Header from "components/Header";
import * as S from "./Shared.styled";
import { Links, OwnerDataType } from "typeStore";

const Shared: React.FC = () => {
  const [ownerData, setOwnerData] = useState<OwnerDataType | any>(null);
  const [filterData, setFilterData] = useState<OwnerDataType[] | []>([]);
  const [inputLength, setInputLength] = useState(0);
  useEffect(() => {
    const getOwnerInformation = async () => {
      const data = await ownerDataApi();
      setOwnerData(data.folder);
    };
    getOwnerInformation();
  }, []);
  const CardList = inputLength
    ? filterData.map((link) => (
        <li key={link.id}>
          <LinkCard linkData={link} />
        </li>
      ))
    : ownerData
    ? ownerData.links.map((link: Links) => (
        <li key={link.id}>
          <LinkCard linkData={link} />
        </li>
      ))
    : null;
  return (
    <>
      <Header />
      <main>
        <S.OwnerInfoSection>
          {ownerData !== null ? (
            <OwnerInformation information={ownerData} />
          ) : (
            <Loading />
          )}
        </S.OwnerInfoSection>
        <S.LinkCardsSection>
          <S.LinkCardContainer>
            <SearchInput
              folderData={ownerData ? ownerData.links : ""}
              setData={setFilterData}
              setLength={setInputLength}
            />
            <S.LinkCardList>
              {ownerData ? CardList : <Loading />}
            </S.LinkCardList>
          </S.LinkCardContainer>
        </S.LinkCardsSection>
      </main>
      <Footer setVisible={null} />
    </>
  );
};

export default Shared;
