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
    PinkToBlue: "linear-gradient(96deg, #FE8A8A 1.72%, #A4CEFF 74.97%)",
    YellowToSkyblue: "linear-gradient(277deg, #6FBAFF 59.22%, #FFD88B 93.66%)",
    BlueToWhite:
      "linear-gradient(99deg, #6D7CCD 19.76%, rgba(82, 136, 133, 0.22) 52.69%)",
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
    },
    flexCenterRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  fonts: {
    headerTitle: {
      fontSize: "64px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "80px",
    },
    title: {
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: "700",
      letterSpacing: "-0.3px",
    },
    largeBold: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
    },
    large: {
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "600",
      lineSpacingt: "-0.2px",
    },
    regular: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },
    regularSmall: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },
    small: {
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },
  },
};

export default theme;
