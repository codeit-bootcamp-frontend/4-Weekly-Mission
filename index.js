window.onload = function () {
  applyChanges(); // 초기 적용

  // 윈도우 크기가 변경될 때마다 적용
  window.addEventListener("resize", applyChanges);
};

function applyChanges() {
  let screenWidth = window.innerWidth;
  let containers = document.querySelectorAll(".container");

  if (screenWidth <= 767 && screenWidth >= 375) {
    // 모바일 화면에서만 실행할 코드
    containers.forEach(function (container) {
      let text = container.querySelector(".text");
      let img = container.querySelector("img");
      let title = container.querySelector(".title");
      let subtitle = container.querySelector(".subtitle");

      if (text && img && title && subtitle) {
        // title과 subtitle을 img와 같은 레벨로 이동
        img.parentNode.insertBefore(title, img.nextSibling);
        img.parentNode.insertBefore(subtitle, img.nextSibling);

        text.parentNode.removeChild(text);
      }
    });
  } else {
    // 웹 화면에서 실행할 코드
    containers.forEach(function (container, index) {
      let text = container.querySelector(".text");
      let img = container.querySelector("img");
      let title = container.querySelector(".title");
      let subtitle = container.querySelector(".subtitle");
      if (!text && img && title && subtitle) {
        // text가 없으면 생성
        let newText = document.createElement("div");
        newText.classList.add("text");

        // 첫번째 섹션과 세번째 섹션 이미지와 텍스트 순서 다름
        if (index === 0 || index === 2) {
          container.insertBefore(newText, img);
        } else {
          container.appendChild(newText);
        }

        // title과 subtitle을 text 아래로 이동
        newText.appendChild(title);
        newText.appendChild(subtitle);
      }
    });
  }
}
