# 코드잇 13주차 미션

이번 13주차에서는 타입스크립트를 적용하면서 느낀점은 조금 더 고급스럽게 적용할 방법이 없을까? 였다.
그래서 자료를 많이 찾아봤던것 같다. 물론 타입스크립트를 쓴다고해서 타입을 너무 장황하게 하면 안좋겠지만,
지금처럼 타입만 지정하는건 타입스크립트를 올바르게 사용하는 방법이 아니라고 생각했다.

# Compound Pattern

모달은 재사용성이 높은 UI다. 그렇지만 이전 코드에서는 재사용성이라곤 찾아볼 수 없었다.
심지어 CSS라도 재사용하면 더 좋았겠지만 그것도 아니였다. 그래서 합성 컴포넌트를 사용하게 되었다.
먼저 합성 컴포넌트를 사용하기 이전에는 재사용성이 불가능했다는 점이였다. 이점을 고려하기 위해 많은 여러가지 패턴이 있지만
나는 컴파운드 패턴을 사용했다.

### 내가 사용한 이유

- 아토믹 디자인과 비슷한 수준으로 컴포넌트들을 세분화하기 때문에 레이아웃 순서와 크게 얽매이지 않는다. (UI 자유도 상승)
- 하나의 컴포넌트에 수많은 props를 전달하지 않아도 된다. (컴포넌트들이 세분화 되어있기 때문이다. 즉 관심사 분리다.)
- JSX가 더 길어질 순 있지만 가독성이 높다.
- 서브 컴포넌트들의 조합으로 이루어져있기 때문에 의존성이 강하게 결합되어있지 않다.

# 검색결과에 디바운스 사용하기

검색을 통해 url, 제목, 요약글을 필터링 하는 기능이 있었다. 사실 이 프로젝트에서는 검색할것이 많지가 않아 디바운스를 사용하지 않아도 됬지만,
실무로가면 당연히 처리해야할 것들이고 미션에서는 내 마음대로 해도되기때문에 공부하는 목적으로 사용해보았다.
나는 재사용성 및 확장성을 고려하기 때문에 미리 커스텀 훅으로 빼놔서 작업했다. (로직이 컴포넌트 내부에 많이 있는걸 싫어한다. 그럼에도 코드가 지저분하다.)
