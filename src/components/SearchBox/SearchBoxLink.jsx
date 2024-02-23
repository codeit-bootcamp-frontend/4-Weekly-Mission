import * as S from './SearchBoxLink.styled';
import { IconLink } from '../Icon';
import { Button } from '../Button';

function SearchBoxLink(props) {
  return (
    <S.SearchLayout>
      <S.SearchInputBox>
        <IconLink />
        <S.SearchInput {...props} />
      </S.SearchInputBox>
      <Button type="button" fontSize="14">
        추가하기
      </Button>
    </S.SearchLayout>
  );
}

export default SearchBoxLink;
