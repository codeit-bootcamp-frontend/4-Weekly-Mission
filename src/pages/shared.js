import React from "react";
import styled from "styled-components";
import Nav from "../components/Common/Nav";
import Folder from "../components/Folder/Folder";
import Footer from "../components/Common/Footer";
import CardGrid from "../components/CardGrid/Cardgrid";

const Shared = () => {
  const HeaderWrapper = styled.div`
    header {
      background-color: var(--gray5);
      width: auto;
    }

    .header-content {
      display: flex;
      width: 100%;
      flex-direction: column;
      position: relative;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
    }

    @media screen and (min-width: 375px) and (max-width: 767px) {
      header {
        row-gap: 2.4rem;
      }

      .header-content {
        padding-top: 6.3rem;
      }
    }
  `;

  return (
    <div>
      <Nav />
      <HeaderWrapper>
        <header>
          <div className="header-content">
            <Folder />
          </div>
        </header>
      </HeaderWrapper>
      <CardGrid />
      <Footer />
    </div>
  );
};

export default Shared;
