const Icon = ({ src, alt, link }) => {
  return (
    <a href={link} key={alt} target='_blank' rel='noopener noreferrer'>
      <img src={src} alt={alt} className={alt} />
    </a>
  );
};

export default Icon;
