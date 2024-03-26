declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare const styles: { [key: string]: string };
export default styles;
