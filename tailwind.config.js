module.exports = {
  theme: {
    extend: {
      colors: {
        "custom-black": "#2E2B2B",
        primary: "#A5E9E1",
        secondary: "#388186",
        "custom-white": "#FDF6F6",
        "custom-grey": "#f2f2f2",
        "custom-grey-dark": "#828282",
        "custom-beige": "#FDF6F6"
      }
    },
    screens: {
      xxs: { max: "340px" },
      "374": { max: "374px" },
      xs: { max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" }
    }
  },
  variants: {},
  plugins: []
};
