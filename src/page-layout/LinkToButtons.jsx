import { Button } from "StyledComponents/Buttons";
import { Link } from "react-router-dom";

export function LinkToButtons() {
  return (
    <div>
      <Link to="/shared">
        {" "}
        <Button>shared</Button>
      </Link>
      <Link to="/folder">
        {" "}
        <Button>folder</Button>
      </Link>
    </div>
  );
}
