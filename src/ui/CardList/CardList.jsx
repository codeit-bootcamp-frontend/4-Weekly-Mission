import { useLocation } from 'react-router-dom';
import './CardList.css';
import SortingButton from 'ui/SortingButton/SortingButton';

export const CardList = ({ children }) => {
  const location = useLocation();
  const isFolderPage = location.pathname.includes('folder') ? true : false;

  return (
    <>
      {isFolderPage && <SortingButton />}
      <div className="CardList">{children}</div>
    </>
  );
};
