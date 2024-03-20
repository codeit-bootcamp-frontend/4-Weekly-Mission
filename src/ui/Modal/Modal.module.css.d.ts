declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare const styles: {
  readonly ModalTitle: string;
  readonly ModalSubtitle: string;
  readonly deleteButton: string;
  readonly submitButton: string;
  readonly folderWrapper: string;
  readonly folderButton: string;
  readonly folderButtonName: string;
  readonly selectedFolder: string;
  readonly folderButtonLinks: string;
  readonly checkIcon: string;
  readonly shareIcons: string;
  readonly iconWrapper: string;
  readonly icons: string;
  readonly ModalWrapper: string;
  readonly Modal: string;
  readonly closeButton: string;
};
export default styles;
