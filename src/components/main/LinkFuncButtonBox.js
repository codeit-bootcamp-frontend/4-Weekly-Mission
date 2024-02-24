import LinkFuncButton from './LinkFuncButton';
import styles from './LinkFuncButtonBox.module.css';
function LinkFuncButtonBox({
  isShowRenameFolderModal,
  handleRenameFolderModalClick,
}) {
  const linkFuncButtonDatas = {
    funcButtons: [
      { buttonName: '공유', buttonImageSourceName: 'share', id: 0 },
      { buttonName: '이름 변경', buttonImageSourceName: 'rename', id: 1 },
      { buttonName: '삭제', buttonImageSourceName: 'delete', id: 2 },
    ],
  };
  return (
    <div className={styles.link_func_button_box_wrapper}>
      {linkFuncButtonDatas.funcButtons.map(
        ({ buttonName, buttonImageSourceName, id }) => {
          return (
            <LinkFuncButton
              key={id}
              buttonName={buttonName}
              buttonImageSourceName={buttonImageSourceName}
              isShowRenameFolderModal={isShowRenameFolderModal}
              handleRenameFolderModalClick={handleRenameFolderModalClick}
            />
          );
        }
      )}
    </div>
  );
}

export default LinkFuncButtonBox;
