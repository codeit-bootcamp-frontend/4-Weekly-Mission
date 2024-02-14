import StyledText from './GradientText.styles';

const GradientText = ({ children, startColor = 'var(--color-primary)', endColor = '#ff9f9f' }) => {
  return (
    <StyledText $startColor={startColor} $endColor={endColor}>
      {children}
    </StyledText>
  );
};

export default GradientText;

//   color: transparent;
//   background: linear - gradient(to right, var(--color - primary), #ff9f9f);
//   background - clip: text;
// }
//
// .section__gradient--primary {
//   color: transparent;
//   background: linear - gradient(96deg, #fe8a8a 1.72 %, #a4ceff 74.97 %);
//   background - clip: text;
// }
//
// .section__gradient--secondary {
//   color: transparent;
//   background: linear - gradient(277deg, #6fbaff 59.22 %, #ffd88b 93.66 %);
//   background - clip: text;
// }
//
// .section__gradient--tertiary {
//   color: transparent;
//   background: linear - gradient(99deg, #6d7ccd 19.76 %, rgb(82 136 133 / 22 %) 52.69 %);
//   background - clip: text;
// }
//
// .section__gradient--quaternary {
//   color: transparent;
//   background: linear - gradient(271deg, #fe578f - 9.84 %, #68e8f9 107.18 %);
//   background - clip: text;
// }
//
