import { useState } from "react";
import { EMPTY_STAR, FULL_STAR } from "./constant";
import "./WishListButton.css";

export function WishListButton() {
  const [wishListBtn, setWishListBtn] = useState(EMPTY_STAR);

  const handleWishListBtn = (e) => {
    e.preventDefault();

    wishListBtn === EMPTY_STAR
      ? setWishListBtn(FULL_STAR)
      : setWishListBtn(EMPTY_STAR);
  };

  return (
    <button className="WishListButton" onClick={handleWishListBtn}>
      <img
        className="WishListButton-button"
        src={wishListBtn}
        alt="즐겨찾기로 추가하기 버튼"
      />
    </button>
  );
}
