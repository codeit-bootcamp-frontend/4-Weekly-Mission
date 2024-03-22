import styles from "./actionButton.module.css";

import shareIcon from "assets/images/ic_share.svg";
import penIcon from "assets/images/ic_pen.svg";
import trashIcon from "assets/images/ic_trash.svg";
import { OpenModal } from "utils/hooks/useModal";

interface Props {
  openModal: OpenModal;
  variant: string;
}

interface Variant {
  [key: string]: {
    icon: string;
    name: string;
    imgUrl: string;
  };
}

function ActionButton({ openModal, variant }: Props) {
  const variantInfo: Variant = {
    shared: { icon: "공유", name: "공유", imgUrl: shareIcon as string },
    edit: { icon: "펜", name: "이름변경", imgUrl: penIcon as string },
    "delete-folder": {
      icon: "쓰레기통",
      name: "삭제",
      imgUrl: trashIcon as string,
    },
  };

  const { icon, name, imgUrl } = variantInfo[variant];

  return (
    <button className={styles.barButton} onClick={() => openModal(variant)}>
      <img src={imgUrl} alt={`${icon} 아이콘`} />
      <span>{name}</span>
    </button>
  );
}

export default ActionButton;
