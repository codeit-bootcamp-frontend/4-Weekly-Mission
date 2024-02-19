const size = {
  mobile: "375px",
  tabletS: "768px",
  tabletL: "1124px",
  desktop: "1200px",
};

const theme = {
  mobile: `(min-width: ${size.mobile})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletL: `(min-width: ${size.tabletL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
