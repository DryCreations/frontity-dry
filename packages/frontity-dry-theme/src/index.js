import Theme from "./components";

const fontityDryTheme = {
  name: "fontity-dry-theme",
  roots: {
    theme: Theme
  },
  state: {
      theme: {
        menu: [],
        colors: {
          headerBackground: "#FFFFFF",
          footerBackground: "#FFFFFF",
          bodyBackground: "#FFFFFF",
        }
      }
  },
  actions: {
      theme: {}
  }
};

export default fontityDryTheme
