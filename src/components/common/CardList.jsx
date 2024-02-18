import Card from "../Card";

// CardList -> 카드 목록 부분
// SharedContent에서는 “/api/sample/folder”를 활용
// FolderContent -> 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI를 보여주세요.
//                -> FolderContent에서는 “전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고, 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용해 주세요.
//                -> 폴더 버튼을 클릭하면 폴더에 해당하는 링크들로 카드를 구성해 주세요. 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI를 보여주세요.
function CardList({ cards }) {
  if (cards.length === 0) return <p>저장된 링크가 없습니다.</p>;

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
