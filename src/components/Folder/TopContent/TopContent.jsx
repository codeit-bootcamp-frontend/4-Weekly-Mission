import styles from './TopContent.module.scss';
import AddLinkBar from '../../AddLinkBar/AddLinkBar';

function TopContent() {
  return (
    <nav className={styles.nav}>
      <AddLinkBar />
    </nav>
  );
}

export default TopContent;
