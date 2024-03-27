export type ModalOpen = (type: string, purpose: any) => void;

export type ModalClose = () => void;

export type ClickFunctionType = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

export type ClickFolderButton = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  folderId: number
) => void;

export type ClickSortButton = (newSelectedFolder: any) => void;
