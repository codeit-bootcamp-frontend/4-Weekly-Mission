```scss
.container.hihi {
  color: blue;
}
.container {
  &hihi {
    color: blue;
  }
}
```

위 코드는 .container 클래스와 .hihi 클래스를 동시에 가진 요소에만 스타일을 적용합니다.

```html
<div class="container hihi">내용</div>
```

이 경우에만 color: blue; 스타일이 적용됩니다.

```scss
.container {
  .hihi {
    color: blue;
  }
}
```

위 코드는 .container 클래스 내부에 포함된 모든 요소 중에서 .hihi 클래스를 가진 요소에 스타일을 적용합니다.

```html
<div class="container">
  <div class="hihi">내용</div>
</div>
```

위의 코드에서 .hihi 클래스를 가진 내부 요소에 대해서만 color: blue; 스타일이 적용됩니다.
