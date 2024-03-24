import logoImg from "../../assets/Linkbrary.png";
import "./FolderHeader.css";
import AddLink from "./AddLink";
import { useMediaQuery } from "react-responsive";

interface Props {
  user: UserData | null;
  imageSource: string | undefined;
  email: string | undefined;
  isShowModal?: (modalState: {
    linkModal: boolean;
    folderAddModal: boolean;
  }) => void;
}

export interface UserData {
  data: Datum[];
}

interface Datum {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
const profileAccount = ({ user, imageSource, email }: Props) => {
  if (!user) {
    return false;
  }

  return (
    <div className="profile-info">
      <img className="logo" src={imageSource} alt="프로필 이미지" />
      <div>{email}</div>
    </div>
  );
};
const FolderHeader: React.FC<Props> = ({
  user,
  imageSource,
  email,
  isShowModal,
}) => {
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  return (
    <>
      <form>
        <nav className="folder-nav">
          <div className={isTablet ? "gnb-width-apply" : "gnb"}>
            <a href="/">
              <img alt="로고이미지" src={logoImg} />
            </a>
            {user ? (
              profileAccount({ user, imageSource, email })
            ) : (
              <button type="submit">Login</button>
            )}
          </div>
        </nav>
      </form>
      <AddLink setIsShowModal={isShowModal} />
    </>
  );
};

export default FolderHeader;
