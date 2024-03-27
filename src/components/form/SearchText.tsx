function SearchText({ searchValues }: { searchValues: string }) {
  return (
    <>
      {searchValues ? (
        <div className="searchTextBox">
          <p>
            <strong>{searchValues}</strong>으로 검색한 결과입니다.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default SearchText;
