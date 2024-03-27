// scss에 대한 모듈 형식을 선언
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
