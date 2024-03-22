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
    grayLight: "#F5F5F5",
    background: "#F0F6FF",
  },

  gradients: {
    blueToSkyblue: "linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)",
    blueToPink: {
      background: "linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    pinkToBlue: {
      background: "linear-gradient(96deg, #FE8A8A 1.72%, #A4CEFF 74.97%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    yellowToSkyblue: {
      background: "linear-gradient(277deg, #6FBAFF 59.22%, #FFD88B 93.66%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    blueToWhite: {
      background:
        "linear-gradient(99deg, #6D7CCD 19.76%, rgba(82, 136, 133, 0.22) 52.69%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    pinkToSkyblue: {
      background: "linear-gradient(271deg, #fe578f -9.84%, #68e8f9 107.18%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },

  displays: {
    spaceBetween: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    columnCenter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    rowCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  fonts: {
    mainTitle: {
      fontSize: "64px",
      lineHeight: "80px",
    },
    mainTitleMobile: {
      fontSize: "32px",
      lineHeight: "42px",
    },
    title: {
      fontSize: "48px",
      letterSpacing: "-0.3px",
    },
    subTitle: {
      fontSize: "40px",
      lineHeight: "normal",
    },
    subTitleSmall: {
      fontSize: "32px",
      lineHeight: "normal",
    },
    large: {
      fontSize: "24px",
      lineSpacingt: "-0.2px",
    },
    SmallTitle: {
      fontSize: "20px",
      lineHeight: "normal",
    },
    regularLarge: {
      fontSize: "18px",
      lineHeight: "normal",
    },
    regular: {
      fontSize: "16px",
      lineHeight: "normal",
    },
    regularSmall: {
      fontSize: "14px",
      lineHeight: "normal",
    },
    small: {
      fontSize: "13px",
      lineHeight: "normal",
    },
  },
  bolds: {
    normal: {
      fontWeight: "400",
    },
    semiBold: {
      fontWeight: "500",
    },
    bold: {
      fontWeight: "600",
    },
    titleBold: {
      fontWeight: "700",
    },
  },
  devices: {
    tablet: `screen and (max-width: 1124px)`,
    mobile: `screen and (max-width: 768px)`,
  },
};

export default theme;
