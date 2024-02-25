import styles from './IconWithLink.module.css';

const IconWithLink = ({ name, address, imgUrl }) => {
  const target = /^http/.test(address) ? '_blank' : '_self';
  const rel = target === '_blank' ? 'noopener noreferrer' : '';

  return (
    <li>
      <a href={address} target={target} rel={rel} className={styles.item}>
        {imgUrl ? <img src={imgUrl} alt={name} /> : `${name}`}
      </a>
    </li>
  );
};

export default IconWithLink;
