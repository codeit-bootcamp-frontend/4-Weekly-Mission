import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput.js";
import "./Shared.css";
import { ownerDataApi } from "../api";
import Loading from "../components/Loading.js";
import OwnerInformation from "../components/OwnerInformation.js";
import LinkCard from "../components/LinkCard.js";
import FooterBlock from "../components/Footer.js";
import HeaderBlock from "../components/Header.js";

const Shared = () => {
  const [ownerData, setOwnerData] = useState(null);

  useEffect(() => {
    const getOwnerInformation = async () => {
      const data = await ownerDataApi();
      setOwnerData(data.folder);
    };
    getOwnerInformation();
  }, []);

  return (
    <>
      <HeaderBlock />
      <main id="main">
        <section className="section owner-information">
          {ownerData !== null ? (
            <OwnerInformation information={ownerData} />
          ) : (
            <Loading />
          )}
        </section>
        <section className="section linkcards">
          <div className="container">
            <SearchInput />
            <ul className="linkcard-list">
              {ownerData ? (
                ownerData.links.map((v) => (
                  <li key={v.id}>
                    <LinkCard linkData={v} />
                  </li>
                ))
              ) : (
                <Loading />
              )}
            </ul>
          </div>
        </section>
      </main>
      <FooterBlock />
    </>
  );
};

export default Shared;
