import * as S from "./WideButton.style";

/**
 *
 * @param {string} type - primary | warning
 */
const WideButton = ({ options }) => {
  return <S.Button type={options.btnType}>{options.btnText}</S.Button>;
};

export default WideButton;
