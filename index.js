window.onload = function () {
  var screenWidth = window.innerWidth;
  var containers = document.querySelectorAll(".container");

  if (screenWidth <= 767 && screenWidth >= 375) {
    // 모바일 화면에서만 실행할 코드
    containers.forEach(function (container) {
      var text = container.querySelector(".text");
      var img = container.querySelector("img");
      var title = container.querySelector(".title");
      var subtitle = container.querySelector(".subtitle");
      console.log(text, img, title, subtitle);
      if (text && img && title && subtitle) {
        // title과 subtitle을 img와 같은 레벨로 이동
        img.parentNode.insertBefore(title, img.nextSibling);
        img.parentNode.insertBefore(subtitle, img.nextSibling);

        text.parentNode.removeChild(text);
      }
    });
  }
};
