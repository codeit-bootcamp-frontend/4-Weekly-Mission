import './cardsearchbar.css';

const CardSearchbar = () => {
  return (
    <form className="search-bar" role="search">
      <label htmlFor="search-input" className="search-visually-hidden">
        링크 검색
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="링크를 검색해 보세요."
        className="search-input"
      />
    </form>
  );
};

export default CardSearchbar;
