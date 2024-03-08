const theme = {
  colors: {
    primary: "#6D6AFE",
    red: "#FF5B56",
    black: "#111322",
    white: "#FFFFFF",
    gray100: "#3E3E43",
    gray60: "#9FA6B2",
    gray20: "#CCD5E3",
    gray10: "#E7EFFB",
    background: "#F0F6FF",
  },

  gradients: {
    blueToPink: "linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%)",
  },

  displays: {
    flexSpaceBetween: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    flexCenter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  },

  fonts: {
    headerTitle: {
      fontSize: "64px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "80px",
    },
  },
};

export default theme;
