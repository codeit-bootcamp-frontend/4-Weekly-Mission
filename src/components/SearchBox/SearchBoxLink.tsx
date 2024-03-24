import * as S from './SearchBoxLink.styled';
import { IconLink } from '../Icon';
import { Button } from '../Button';
import { InputProps } from '@src/types/common';

interface SearchBoxLinkProps extends InputProps {}

function SearchBoxLink(props: SearchBoxLinkProps) {
  return (
    <S.SearchLayout>
      <S.SearchInputBox>
        <IconLink />
        <S.SearchInput {...props} />
      </S.SearchInputBox>
      <Button type="button" fontSize={14}>
        추가하기
      </Button>
    </S.SearchLayout>
  );
}

export default SearchBoxLink;
