export const cn = (...classNameList) => {
  return classNameList.filter(className => !!className).join(' ');
};
