//types
import { MediaLink } from "../types/commonTypes";

function Icon({ mediaType }: { mediaType: MediaLink }) {
  return (
    <a href={mediaType?.link}>
      <img src={mediaType?.logo} alt={mediaType?.type} />
    </a>
  );
}

export default Icon;
