const heroStyle = {
  backgroundColor: "#f0f6ff",
};

function Hero({ children }) {
  return <div style={heroStyle}>{children}</div>;
}

export default Hero;
