# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 한 일

- CRA가 아닌 VITE 사용 이유를 알아보고 정리: https://my-eun.tistory.com/24

# 어렵거나 오류가 생긴 부분

- 린터와 프리티어에 대해 자세히 이해하지 못함
- public 파일에 위치한 index.html를 프로젝트의 시작점으로 설정하기위해 vite.config.js의 base를 추가하여 시도하였지만, 페이지 링크가 local../이 아닌 local../pubilc/index.html로 시작하는 문제점 발생

# 느낀점

- 아직 vite와의 다른점을 확실하게 이해하지 못함.. 좀 더 공부가 필요하다 생각
