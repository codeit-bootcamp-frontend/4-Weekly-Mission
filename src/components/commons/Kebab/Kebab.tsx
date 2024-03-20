import { useEffect, useRef } from 'react';
import {
  SelectButton,
  KebabButton,
  SelectWrapper,
  Wrapper,
} from './Kebeb.style';

interface Props {
  kebabID: number | null;
  cardID: number | null;
  changeKebabID: (value: number | null) => void;
}

const Kebab = ({ cardID, kebabID, changeKebabID }: Props) => {
  const wraperRef = useRef<HTMLDivElement>(null);

  const clickKebabButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    changeKebabID(cardID);
    e.preventDefault();
  };

  const clickDeleteButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const clickAddButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const clickOtherPart = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (wraperRef.current && !wraperRef.current?.contains(target)) {
        changeKebabID(null);
      }
    };
    document.addEventListener('click', clickOtherPart);
    return () => document.removeEventListener('click', clickOtherPart);
  }, []);
  return (
    <Wrapper ref={wraperRef}>
      <KebabButton
        src="/images/kebab.svg"
        alt="kebab"
        width={21}
        height={17}
        onClick={clickKebabButton}
      />
      {kebabID === cardID && (
        <SelectWrapper>
          <SelectButton onClick={clickDeleteButton}>삭제하기</SelectButton>
          <SelectButton onClick={clickAddButton}>폴더에 추가</SelectButton>
        </SelectWrapper>
      )}
    </Wrapper>
  );
};

export default Kebab;
