import styled from 'styled-components';

const LoadStyle = styled.div`
  background: transparent;
  @keyframes ldio-k2052xt6c1e {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .ldio-k2052xt6c1e div {
    left: 47px;
    top: 24px;
    position: absolute;
    animation: ldio-k2052xt6c1e linear 1s infinite;
    background: #7192ff;
    width: 6px;
    height: 12px;
    border-radius: 3px / 6px;
    transform-origin: 3px 26px;
  }
  .ldio-k2052xt6c1e div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9166666666666666s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -0.8333333333333334s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.75s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.6666666666666666s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.5833333333333334s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.5s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.4166666666666667s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.3333333333333333s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.25s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.16666666666666666s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.08333333333333333s;
    background: #7192ff;
  }
  .ldio-k2052xt6c1e div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
    background: #7192ff;
  }
  .loadingio-spinner-spinner-1j83vgwobu3 {
    width: 81px;
    height: 81px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-k2052xt6c1e {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.81);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-k2052xt6c1e div {
    box-sizing: content-box;
  }
`;

const Loader = () => {
  return (
    <LoadStyle>
      <div className="loadingio-spinner-spinner-1j83vgwobu3">
        <div className="ldio-k2052xt6c1e">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </LoadStyle>
  );
};

export default Loader;
