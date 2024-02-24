import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1060px;
  margin: 40px auto 0;

  /* tablet */
  @media all and (max-width: 1124px) {
    padding: 0 32px;
  }
  .folder-list-box {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  gap: 25px 20px;
  flex-wrap: wrap;
`;
export const FolderButtonList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .folder-btn-box {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    .folder-btn {
      border-radius: 5px;
      border: 1px solid var(--primary, #6d6afe);
      padding: 8px 12px;
      color: #000;
      font-size: 16px;
    }
    .folder-btn:hover,
    .active {
      color: var(--white, #fff);
      background: var(--primary, #6d6afe);
    }
  }
  .add-folder-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    & button {
      color: var(--primary, #6d6afe);
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.3px;
      white-space: nowrap;
    }
  }
  @media all and (min-width: 375px) and (max-width: 767px) {
    .add-folder-btn {
      position: fixed;
      bottom: 101px;
      left: 50%;
      transform: translateX(-50%);
      padding: 8px 24px;
      border-radius: 20px;
      border: 1px solid var(--white, #fff);
      background: var(--primary, #6d6afe);
      z-index: 11;
      & button {
        color: var(--white, #fff);
      }
    }
  }
`;

export const currentName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.2px;
  }
  .folder-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    .control-btn {
      display: flex;

      gap: 4px;
    }
  }
`;

export const NoFolderLink = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 41px 0 35px;
`;

const StyledSvg = styled.svg`
  @media screen and (min-width: 375px) and (max-width: 767px) {
    path {
      fill: white;
    }
  }
`;

export const addPlusSvg = () => {
  return (
    <StyledSvg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="add">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.52175 2.46603C8.52175 2.17148 8.28297 1.9327 7.98841 1.9327C7.69386 1.9327 7.45508 2.17148 7.45508 2.46603L7.45508 7.96668L1.9545 7.96668C1.65994 7.96668 1.42116 8.20546 1.42116 8.50001C1.42116 8.79456 1.65994 9.03335 1.9545 9.03335L7.45508 9.03335L7.45508 14.534C7.45508 14.8285 7.69387 15.0673 7.98842 15.0673C8.28297 15.0673 8.52175 14.8285 8.52175 14.534L8.52175 9.03335L14.0224 9.03335C14.317 9.03335 14.5558 8.79457 14.5558 8.50002C14.5558 8.20546 14.317 7.96668 14.0224 7.96668L8.52175 7.96668L8.52175 2.46603Z"
          fill="#6D6AFE"
        />
      </g>
    </StyledSvg>
  );
};
