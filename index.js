window.onload = function () {
  applyChanges(); // 초기 적용

  // 윈도우 크기가 변경될 때마다 적용
  window.addEventListener("resize", applyChanges);
};

function applyChanges() {
  var screenWidth = window.innerWidth;
  var containers = document.querySelectorAll(".container");

  if (screenWidth <= 767 && screenWidth >= 375) {
    // 모바일 화면에서만 실행할 코드
    containers.forEach(function (container) {
      var text = container.querySelector(".text");
      var img = container.querySelector("img");
      var title = container.querySelector(".title");
      var subtitle = container.querySelector(".subtitle");

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
      var text = container.querySelector(".text");
      var img = container.querySelector("img");
      var title = container.querySelector(".title");
      var subtitle = container.querySelector(".subtitle");
      if (!text && img && title && subtitle) {
        // text가 없으면 생성
        var newText = document.createElement("div");
        newText.classList.add("text");
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
