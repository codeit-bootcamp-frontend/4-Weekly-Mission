import { GridTemplate } from 'styles/commonStyle';

import SearchBar from 'components/SearchBar';
import Card from 'components/common/card/Card';
import PLACEHOLDER from 'constants/FORM_MESSAGE';

function SharePage() {
  // 테스트 작업 중

  return (
    <>
      <SearchBar placeholder={PLACEHOLDER.SEARCH_LINK} style={{ marginBottom: '4rem' }} />
      <GridTemplate>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridTemplate>
    </>
  );
}

export default SharePage;
