function Icon({ mediaType }) {
  return (
    <a href={mediaType?.link}>
      <img src={mediaType?.logo} alt={mediaType?.type} />
    </a>
  );
}

export default Icon;
