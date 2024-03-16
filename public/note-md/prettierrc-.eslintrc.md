prettierrc-.eslintrc 공부...

{
"tabWidth": 2,
"endOfLine": "lf",
"arrowParens": "avoid",
"singleQuote": true
}

{
"extends": [
"airbnb",
"eslint:recommended",
"plugin:react/recommended",
"prettier",
],
"plugins": ["react", "prettier"],
"env": {
"node": true,
"jest": true,
"browser": true,
},
"rules": {
// .js와 .jsx 파일 사용
"react/jsx-filename-extension": [1, { "extensions": [".jsx", ".js"] }],
// 함수 컴포넌트 선언을 검사하는 규칙을 비활성화(화살표 함수)
"react/function-component-definition": "off",
// 사용되지 않는 변수에 대한 경고를 비활성화합니다.
"no-unused-vars": "off",
// 클릭 이벤트가 키보드 이벤트를 함께 가져야 한다는 규칙을 비활성화합니다.
"jsx-a11y/click-events-have-key-events": "off",
// label 요소가 제어 요소와 연결되어야 한다는 규칙을 비활성화합니다.
"jsx-a11y/label-has-associated-control": "off",
"react/prop-types": "off",
},
}
