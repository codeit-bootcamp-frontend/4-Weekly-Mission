import { EDIT_TOOLBAR_LIST } from "../../../../constnats/lists";
import * as S from "./EditToolbarStyle";

const EditToolbar = () => {
  return (
    <S.Container>
      {EDIT_TOOLBAR_LIST.map((tool) => (
        <S.Box key={tool.title}>
          <S.Image src={tool.image} alt={tool.title} />
          <S.Text>{tool.title}</S.Text>
        </S.Box>
      ))}
    </S.Container>
  );
};

export default EditToolbar;
