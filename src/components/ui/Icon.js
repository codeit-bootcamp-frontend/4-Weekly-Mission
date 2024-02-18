const Icon = ({ src, alt, link, className }, index) => {
  return (
    <a href={link} key={index} target='_blank' rel='noopener noreferrer'>
      <img src={src} alt={alt} className={alt} />
    </a>
  );
};

export default Icon;
