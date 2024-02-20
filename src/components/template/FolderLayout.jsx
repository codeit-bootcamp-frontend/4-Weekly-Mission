import { styled } from 'styled-components';

import SearchBar from 'components/SearchBar';
import PLACEHOLDER from 'constants/FORM_MESSAGE';
import FolderHeader from 'components/folder/FolderHeader';

const Styled = {
  Container: styled.div`
    width: 100%;
    padding: 4rem calc((100vw - 110rem) / 2 + 2rem);

    @media (min-width: 768px) and (max-width: 1199px) {
      padding: 4rem 3.2rem;
    }
    @media (max-width: 767px) {
      padding: 2rem 3.2rem;
    }
  `,
};

function FolderLayout({ children }) {
  return (
    <>
      <FolderHeader />
      <Styled.Container>
        <SearchBar placeholder={PLACEHOLDER.SEARCH_LINK} />
        {children}
      </Styled.Container>
    </>
  );
}

export default FolderLayout;
