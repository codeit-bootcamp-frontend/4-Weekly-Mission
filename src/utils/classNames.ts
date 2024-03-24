export const cn = (...classNameList: (string | boolean)[]) => {
  return classNameList.filter(className => !!className).join(' ');
};
