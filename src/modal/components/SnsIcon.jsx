import styles from "../styles/SnsIcon.module.css";

export default function SnsIcon({ icon, name }) {
  return (
    <div>
      <img className={styles["sns-icon"]} src={icon} alt={`${name} 아이콘`} />
      <p className={styles["sns-name"]}>{name}</p>
    </div>
  );
}
